const {} = require("express");

import UserController from "./controllers/UserController";

const router = Router();

router.get("/users/:id", UserController.show);
router.post("/users", UserController.store);
router.post("/session", SessionController.store);

module.exports = router;
