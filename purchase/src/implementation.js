const User = require("../src/schemas/Purchase");

module.exports = {
  async getPurchaseByIdRequest(call, callback) {
    const { id } = call.request;

    const response = await Purchase.findById(id);

    return callback(null, { purchase: response });
  },
  async listPurchases(call, callback) {
    const { userId } = call.request;

    const purchases = await Purchase.find({ userId });

    return callback(null, { purchases });
  },
  async purchase(call, callback) {
    const { title, value, userId } = call.request;

    const purchase = await Purchase.create({ title, value, userId });

    return callback(null, {
      purchase: {
        ...purchase.toObject(),
        id: purchase._id,
      },
    });
  },
};
