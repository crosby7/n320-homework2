## Custom Project Scaffold

#### Summary of Scaffold

This module uses readline to ask the name of a project to make a directory from. Then, the module creates a scaffold as follows:

- If there is not already a directory with the given project name, a project directory is created with that name at the current working directory.
  - An index.js file is created when the directory is created.
- If the project directory doesn't already have a functions directory, one is created.
  - A functions.js file is created when the directory is created.
- A README.md is created with a heading.

#### To utilize module

---

## Key Takeaways

#### Built-In Modules

- Path
  - Allows us to work with filepaths
  - Join, resolve, and basename
  - Applicable across OSs
- FS
  - Commands for files
  - Read, write, update, delete
  - readFileSync, writeFileSync, mkdirSync, existsSync

#### Environment Variables

process.env contains environment variables available to the current process. Comes in the form of an object with key-value pairs.

#### Publish Module to NPM

- Version field (Semantic Versioning)
  - Major (1.0.0)
  - Minor (1.1.0)
  - Patch (1.1.1)
- Can be updated manually in package.json or automatically with CLI

```
npm version patch
```

- Bin (exectuables provided)
