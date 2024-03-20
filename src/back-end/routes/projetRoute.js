const express = require("express");
const router = express.Router();
const projetControllers = require("../controllers/projetController");

router
  .route("/add").post(projetControllers.addProjet);
 
router
  .route("/update/:projet_id")
  .post(projetControllers.updateProjet);

router
  .route("/delete/:projet_id")
  .delete(projetControllers.deleteProjet);

router
    .route("/:projet_id")
    .get(projetControllers.getProjet);


module.exports = router;
