const grpc = require("grpc");
const { loaderConfig } = require("./config");

const usersDef = protoLoader.loadSync(
  path.resolve(__dirname, "src", "pb", "messages.proto"),
  loaderConfig
);

const usersService = grpc.loadPackageDefinition(usersDef);

const usersClient = new usersService.UserService(
  "localhost:3334",
  grpc.credentials.createInsecure()
);
