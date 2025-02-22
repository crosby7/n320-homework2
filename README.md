## Custom Project Scaffold

#### Summary of Scaffold

This module uses readline to ask the name of a project to make a directory from. Then, the module creates a scaffold as follows:

- If there is not already a directory with the given project name, a project directory is created with that name at the current working directory.
  - An index.js file is created when the directory is created.
- If the project directory doesn't already have a functions directory, one is created.
  - A functions.js file is created when the directory is created.
- A README.md is created with a heading.

#### To utilize module

1. Navigate to the directory you'd like to create a project within (e.g. N320Lectures)
2. Paste the following line into your terminal (ensure your working directory is correct)

```
npm i n320-create-cam-app
```

3. Now that the package is installed, run the following command to initialize your project scaffold

```
npx n320-create-cam-app
```

4. You will be prompted to give a project name, which will become the name of the directory to initialize the project within

   - This will create:
     - Project directory (with your given project name)
     - Index.js in project directory
     - Functions directory
     - Functions.js in functions directory

5. You will be asked if you want to create a readme. The prompt will ask for a "yes" or "no"
   - "Yes": Create readme
   - "No": End readline session, do not create readme
   - Other answer: repeat the prompt
   - No answer: create the readme

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
