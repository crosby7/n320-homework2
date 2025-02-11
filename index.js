const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.question("Name of project: ", function (projectName) {
  const projectDirectory = path.resolve(process.cwd(), projectName);
  const functionsDirectory = path.join(projectDirectory, "functions");
  const readmeFile = path.join(projectDirectory, "README.md");
  const indexFile = path.join(projectDirectory, "index.js");
  const functionsFile = path.join(functionsDirectory, "functions.js");

  if (!fs.existsSync(projectDirectory)) {
    fs.mkdirSync(projectDirectory);
    fs.writeFileSync(indexFile, `console.log("Hello, ${projectName}");`);
  }

  if (!fs.existsSync(functionsDirectory)) {
    fs.mkdirSync(functionsDirectory);
    fs.writeFileSync(functionsFile, `console.log("functions");`);
  }

  fs.writeFileSync(readmeFile, `## ${projectName}`);

  app.close();
});
