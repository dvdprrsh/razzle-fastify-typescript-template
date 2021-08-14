import App from "client/App";
import { FastifyPluginCallback } from "fastify";
import fastifyStatic from "fastify-static";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

let assetsImport: GenericObject;
import(process.env.RAZZLE_ASSETS_MANIFEST!).then((res) => {
  assetsImport = res.default;
});

const cssLinksFromAssets = (assets: GenericObject, entryPoint: string) =>
  (assets && assets[entryPoint]?.css?.map((asset: string) => `<link rel="stylesheet" href="${asset}">`).join("")) || "";

const jsScriptTagsFromAssets = (assets: GenericObject, entryPoint: string, extra = "") =>
  (assets && assets[entryPoint]?.js.map((asset: string) => `<script src="${asset}"${extra}></script>`).join("")) || "";

const server: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.register(fastifyStatic, { root: process.env.RAZZLE_PUBLIC_DIR!, prefix: "/public" }).get("/*", async (req, res) => {
    const context: { url?: string } = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>,
    );

    if (context.url) {
      return res.redirect(context.url);
    }
    res
      .status(200)
      .type("text/html")
      .send(
        `
        <!doctype html>
        <html lang="en-GB">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>Welcome to Razzle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${cssLinksFromAssets(assetsImport, "client")}
        </head>
        <body>
            <div id="root">${markup}</div>
            ${jsScriptTagsFromAssets(assetsImport, "client", " defer crossorigin")}
        </body>
        </html>
`,
      );
  });

  done();
};

// server.test = "TEST";

export default server;
