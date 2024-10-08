const path = require("path");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const implementation = require("./implementation");

require("./src/database");

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, "src", "pb", "messages.proto"),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const proto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(proto.PurchaseService.service, implementation);
server.bindAsync(
  "0.0.0.0:3334",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);
