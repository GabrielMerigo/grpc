const grpc = require("@grpc/grpc-js");
const loaderConfig = require("../config/proto");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const usersDef = protoLoader.loadSync(
  path.resolve(__dirname, "..", "pb", "purchases.proto"),
  loaderConfig
);

const purchaseService = grpc.loadPackageDefinition(usersDef);

const usersClient = new purchaseService.PurchaseService(
  "localhost:3335",
  grpc.credentials.createInsecure()
);

module.exports = usersClient;
