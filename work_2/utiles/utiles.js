import fs from 'fs/promises';

export async function readFile(pathPath, isParsed) {
  const data = await fs.readFile(pathPath, 'utf-8');

  return isParsed ? JSON.parse(data) : data;
}

export async function writeFile(path, data, isStrigify) {
  if (!data || !path) return null;

  await fs.writeFile(path, isStrigify ? JSON.stringify(data) : data);
}
