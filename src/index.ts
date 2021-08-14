/* eslint-disable @typescript-eslint/no-var-requires */
import fastify, { FastifyInstance, FastifyPluginCallback } from "fastify";
import fastifySensible from "fastify-sensible";
import middiePlugin from "middie";

let app: FastifyInstance;

if (module.hot) {
  module.hot.accept("./server", async function () {
    console.log("🔁  HMR Reloading `./server`...");
    try {
      // console.log("HMR_BUILD");
      await build(require("./server"));
      // console.log("HMR_BUILD_COMPLETE");
    } catch (error) {
      console.error("ERROR", error);
    }
    console.log("✅ Server-side HMR Complete");
  });
  console.info("✅  Server-side HMR Enabled!");
}

const port = process.env.PORT || 3000;

async function build(appPlugin: FastifyPluginCallback) {
  if (app) {
    // console.log("HMR_BUILD_IN_PROGRESS");
    await app.close();
    // console.log("HMR_BUILD_IN_PROGRESS_2");
  }
  const server = fastify({ logger: false });
  await server.register(middiePlugin);
  await server.register(fastifySensible);
  await server.register(appPlugin, { prefix: "/" });
  server.listen(port, function (error) {
    if (error) {
      throw error;
    }
    console.log(`🚀 Started on port ${port}`);
  });
  app = server;
}

build(require("./server"));
