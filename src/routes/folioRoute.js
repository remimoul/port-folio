const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router
  .route("/user/login").post(userControllers.userLogin);

  
router
  .route("/user/register")
  .post(userControllers.createAUser);

router
  .route("/user/:user_id")
  .put(userControllers.updateUser)
  .delete(userControllers.deleteUser);




module.exports = router;
