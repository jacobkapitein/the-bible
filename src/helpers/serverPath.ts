import path from "path";

export const serverPath = (staticFilePath: string) => {
  return path.join(process.cwd(), staticFilePath);
};
