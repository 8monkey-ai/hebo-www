/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hebo-www",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("hebo-ai", {
      path: ".",
      domain: {
        name: "hebo.ai",
        redirects: ["www.hebo.ai"],
      }
    });
  },
});
