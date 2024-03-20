const Infoperso = require("../model/infopersoModel");

exports.addInfoperso = async (req, res) => {
  try {
    const newInfoperso = new Infoperso(req.body);
    const infoperso = await newInfoperso.save();
    res.status(201).json(infoperso);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'ajout de l'information personnelle" });
  }
};

exports.updateInfoperso = async (req, res) => {
  try {
    const infoperso = await Infoperso.findByIdAndUpdate(req.params.infoperso_id, req.body, {
      new: true,
    });

    if (!infoperso) {
      return res.status(404).json({ message: "Information personnelle non trouvée" });
    }

    res.status(200).json(infoperso);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour de l'information personnelle" });
  }
};

exports.deleteInfoperso = async (req, res) => {
  try {
    const infoperso = await Infoperso.findByIdAndDelete(req.params.infoperso_id);

    if (!infoperso) {
      return res.status(404).json({ message: "Information personnelle non trouvée" });
    }

    res.status(200).json({ message: "Information personnelle supprimée" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'information personnelle" });
  }
};

exports.getInfoperso = async (req, res) => {
  try {
    const infoperso = await Infoperso.findById(req.params.infoperso_id);

    if (!infoperso) {
      return res.status(404).json({ message: "Information personnelle non trouvée" });
    }

    res.status(200).json(infoperso);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération de l'information personnelle" });
  }
};