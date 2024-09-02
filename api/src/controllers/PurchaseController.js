const PurchaseService = require("../services/purchase");

class PurchaseController {
  async index(req, res) {
    const { id } = req.params;

    const response = await PurchaseService.getPurchaseById(id);

    return res.json(response);
  }
  async show(req, res) {
    const { id: userId } = req.params;
  }
  async store(req, res) {}
}

module.exports = new PurchaseController();
