// Built-ins
const http = require("http");
const fs = require("fs");
const path = require("path");

// Class imports
const WebFile = require("./functions/webfile");

// Request handler
/**
 *
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
function app(req, res) {
  const fileReq = new WebFile(req.url);
  const filePath = path.join(__dirname, "views", fileReq.filename);

  // Cleanup: get contentType before conditionals
  const contentType =
    fs.existsSync(filePath) && fileReq.getExtension()
      ? fileReq.getMimeType()
      : "text/html";

  res.writeHead(200, { "Content-Type": contentType });

  if (fs.existsSync(filePath) && fileReq.getExtension()) {
    res.write(fs.readFileSync(filePath));
  } else if (
    !fileReq.getExtension() &&
    fs.existsSync(path.join(filePath, "index.html"))
  ) {
    res.write(fs.readFileSync(path.join(filePath, "index.html")));
  } else if (!fileReq.getExtension() && fs.existsSync(filePath + ".html")) {
    res.write(fs.readFileSync(filePath + ".html"));
  } else {
    res.write(fs.readFileSync(path.join(__dirname, "views", "404.html")));
  }
  res.end();
}

// Create server
const server = http.createServer(app);

// Listen on port 5445
const port = process.env.PORT || 5445;
server.listen(port);
