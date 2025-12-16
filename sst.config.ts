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
      }
    });
  },
});

