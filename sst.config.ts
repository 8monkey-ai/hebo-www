/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hebo-www",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      region: "us-east-2",
    };
  },

  async run() {

    const mintlifyOriginId = "mintlify-docs";
    const mintlifyDomain = "test-7812e101.mintlify.dev";
    const cachingDisabled = aws.cloudfront.getCachePolicyOutput({ name: "Managed-CachingDisabled" });
    const cachingOptimized = aws.cloudfront.getCachePolicyOutput({ name: "Managed-CachingOptimized" });
    const originRequestPolicy = aws.cloudfront.getOriginRequestPolicyOutput({ name: "Managed-AllViewerExceptHostHeader" });

    const mintlifyOrigin = {
      originId: mintlifyOriginId,
      domainName: mintlifyDomain,
      customOriginConfig: {
        httpPort: 80,
        httpsPort: 443,
        originProtocolPolicy: "https-only",
        originSslProtocols: ["TLSv1.2"],
      },
    };

    const makeBehavior = (pathPattern: string, cachePolicyId: any) => ({
      pathPattern,
      targetOriginId: mintlifyOriginId,
      viewerProtocolPolicy: "redirect-to-https",
      allowedMethods: ["GET", "HEAD", "OPTIONS"],
      cachedMethods: ["GET", "HEAD"],
      compress: true,
      cachePolicyId,
      originRequestPolicyId: originRequestPolicy.id,
    });

    new sst.aws.StaticSite("HeboWww", {
      path: ".",
      build: {
        command: "bun run build",
        output: "build/client",
      },
      domain: {
        name: $app.stage === "production" ? "hebo.ai" : `${$app.stage}.hebo.ai`,
        redirects: [
          $app.stage === "production" ? "www.hebo.ai" : `www.${$app.stage}.hebo.ai`,
        ],
      },
      transform: {
        cdn: (cdn) => {
          cdn.origins = $resolve(cdn.origins).apply((origins) => [
            ...origins,
            mintlifyOrigin,
          ]);

          cdn.defaultCacheBehavior = {
            ...cdn.defaultCacheBehavior,
            originRequestPolicyId: originRequestPolicy.id,
          };

          cdn.orderedCacheBehaviors = $resolve(
            cdn.orderedCacheBehaviors ?? [],
          ).apply((behaviors) => [
            ...behaviors,
            makeBehavior("/.well-known/*", cachingDisabled.id),
            makeBehavior("/mintlify-assets/_next/static/*", cachingOptimized.id),
            makeBehavior("/docs", cachingDisabled.id),
            makeBehavior("/docs/*", cachingDisabled.id),
          ]);
        },
      },
    });
  },
});

