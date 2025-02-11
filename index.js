#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function includeReadme() {
  app.question("Include README.md? (yes/no): ", function (answer) {
    const cleanedAnswer = answer.trim().toLowerCase();
    if (cleanedAnswer === "yes" || !answer) {
      fs.writeFileSync(readmeFile, `## ${projectName}`);
      return;
    } else if (cleanedAnswer === "no") {
      return;
    } else {
      includeReadme();
    }
  });
}

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

  includeReadme();

  app.close();
});
