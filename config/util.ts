import path from "path";

export const pathFn = (pathUrl) => {
  const rootUrl = path.resolve(__dirname, "../");
  return path.resolve(rootUrl, pathUrl);
};
