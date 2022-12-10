const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://localhost:7257/api/"
  : "https://webapi20221210195228.azurewebsites.net/api/";
//https://localhost:7257/api/
