const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.NODE_ENV === "production"
        ? "https://stitch-mart-backend.onrender.com"
        : "http://localhost:3001",
      changeOrigin: true,
    })
  );
};
