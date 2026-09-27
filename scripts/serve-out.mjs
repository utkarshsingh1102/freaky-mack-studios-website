// Serves the static export (out/) like a static host: /path/ → index.html, unknown → 404.html with status 404.
// Usage: node scripts/serve-out.mjs [port]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.argv[2] || 4000);
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml", ".json": "application/json" };

http
  .createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(root, url);
    if (!file.startsWith(root)) return res.writeHead(403).end();
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    let status = 200;
    if (!fs.existsSync(file)) {
      if (!url.endsWith("/") && fs.existsSync(path.join(root, url, "index.html"))) return res.writeHead(308, { Location: `${url}/` }).end();
      file = path.join(root, "404.html");
      status = 404;
    }
    res.writeHead(status, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`out/ on http://localhost:${port}`));
