#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function includeReadme(callback) {
  app.question("Include README.md? (yes/no): ", function (answer) {
    const cleanedAnswer = answer.trim().toLowerCase();
    if (cleanedAnswer === "yes" || !answer) {
      callback();
    } else if (cleanedAnswer === "no") {
      app.close();
    } else {
      includeReadme(callback);
    }
  });
}

app.question("Name of project: ", function (projectName) {
  const projectDirectory = path.resolve(process.cwd(), projectName);
  const functionsDirectory = path.join(projectDirectory, "functions");
  const libDirectory = path.join(__dirname, "lib");
  const viewsDir = path.join(projectDirectory, "views");

  const readmeFile = path.join(projectDirectory, "README.md");
  const serverFile = path.join(projectDirectory, "server.js");
  const functionsFile = path.join(functionsDirectory, "webfile.js");

  const webfilePath = path.join(libDirectory, "webfile.js");
  const serverPath = path.join(libDirectory, "server.js");

  if (!fs.existsSync(projectDirectory)) {
    fs.mkdirSync(projectDirectory);
    fs.writeFileSync(serverFile, fs.readFileSync(serverPath));
  }

  if (!fs.existsSync(functionsDirectory)) {
    fs.mkdirSync(functionsDirectory);
    fs.writeFileSync(functionsFile, fs.readFileSync(webfilePath));
  }

  if (!fs.existsSync(viewsDir)) {
    fs.mkdirSync(viewsDir);
  }

  includeReadme(function () {
    fs.writeFileSync(readmeFile, `# ${projectName}`);
    app.close();
  });
});
