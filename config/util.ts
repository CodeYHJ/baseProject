import path from "path";

export const pathFn = (pathUrl:string='./') => {
  const rootUrl = path.resolve(__dirname, "../");
  return path.resolve(rootUrl, pathUrl);
};
