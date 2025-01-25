import * as path from 'path';
import * as fs from 'fs';

const apexClassNameToFileContents = new Map<string, string>();

export function readTestApexClass(apexClassName: string) {
    if (apexClassNameToFileContents.has(apexClassName)) {
        return apexClassNameToFileContents.get(apexClassName);
    }

    const apexClassPath = path.join('.', 'src', '__tests__', 'classes', `${apexClassName}.cls`);
    const buffer = fs.readFileSync(apexClassPath);
    const contents = buffer.toString();

    apexClassNameToFileContents.set(apexClassName, contents);
    return contents;
}