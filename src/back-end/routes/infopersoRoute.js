const express = require("express");
const router = express.Router();
const infopersoControllers = require("../controllers/infopersoController");

router
  .route("/add").post(infopersoControllers.addInfoPerso);
 
router
  .route("/update/:infoperso_id")
  .put(infopersoControllers.updateInfoPerso);

router
  .route("/delete/:infoperso_id")
  .delete(infopersoControllers.deleteInfoPerso);

router
    .route("/:infoperso_id")
    .get(infopersoControllers.getInfoPerso);


module.exports = router;
