import path from 'path';
import fs from 'fs';

const apexClassNameToFileContents = new Map<string, string>();

function readTestApexClass(apexClassName: string) {
    if (apexClassNameToFileContents.has(apexClassName)) {
        return apexClassNameToFileContents.get(apexClassName);
    }

    const apexClassPath = path.join('src', '__tests__', 'utils', `${apexClassName}.cls`);
    const buffer = fs.readFileSync(apexClassPath);
    const contents = buffer.toString();

    apexClassNameToFileContents.set(apexClassName, contents);
    return contents;
}