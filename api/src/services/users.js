const grpc = require("@grpc/grpc-js");
const loaderConfig = require("../config/proto");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const usersDef = protoLoader.loadSync(
  path.resolve(__dirname, "..", "pb", "api.proto"),
  loaderConfig
);

const usersService = grpc.loadPackageDefinition(usersDef);

const usersClient = new usersService.UserService(
  "localhost:3334",
  grpc.credentials.createInsecure()
);

module.exports = usersClient;
