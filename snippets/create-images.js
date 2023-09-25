import { promisify } from 'node:util';
import { exec } from  'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, parse } from 'node:path';
import { cwd, exit } from 'node:process';
 
const execute = promisify(exec);

async function runCarbon(inputFile, outputPath, root) {
  const configPath = resolve(root, 'snippets/carbon-config.json');
  const carbonNowPath = resolve(root, 'node_modules/.bin/carbon-now');
  const filename = parse(inputFile);
  const fileExtension = filename.ext.substring(1);
  
  const availableConfigurations = Object.keys(JSON.parse(await readFile(configPath)));
  const profile = availableConfigurations.includes(fileExtension) ? fileExtension : 'default';

  try {
    const args = [
        inputFile,
        `--config ${configPath}`,
        `-p ${profile}`,
        `--save-to ${outputPath}`,
        `--save-as ${filename.name}`,
    ];
    const { stdout, stderr } = await execute(`${carbonNowPath} ${args.join(' ')}`);
  } catch (e) {
    console.log(`💥 Unable to find generate snippet image from ${inputFile.replace(root, '🦷')}, cause:`);
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
}

async function* getFiles(path) {
  const dirents = await readdir(path, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(path, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

function findProjectRoot(path = cwd()) {
  if (!existsSync(path)) {
    return null;
  }
  const packageJson = resolve(path, 'package.json');
  if (!existsSync(packageJson)) {
    return findProjectRoot(resolve(path, '..'));
  }
  return path;
}

const root = findProjectRoot();

if (!root) {
  console.log('💥 Unable to find project root! (unable to determine location of "package.json")');
  exit(-1);
}

if (!existsSync(resolve(root, 'node_modules/.bin/carbon-now'))) {
  console.log('💥 Unable to find "carbon-now" CLI! (consider running "npm install" and try again)');
  exit(-1);
}

console.log(`🦷 Project root is: "${root}"\n`);

const configFileContents = await readFile(resolve(root, 'snippets/snippets.json'));
const config = JSON.parse(configFileContents);

config.forEach(async ({name, locations}) => {
    console.log(`🔥 Generating snippets for ${name}`);
    
    const input = resolve(root, locations.source);
    console.log(`\t📁 Input (source): ${input.replace(root, '🦷')}`);

    const output = resolve(root, locations.output);  
    console.log(`\t🪣 Output (destination): ${output.replace(root, '🦷')}`);

    for await (const file of getFiles(input)) {
      console.log(`\t📄 Generating "Carbon now"-image from snippet "${file.replace(root, '🦷')}"!`)
      await runCarbon(file, output, root);
    }
});