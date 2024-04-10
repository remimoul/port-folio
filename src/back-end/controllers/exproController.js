const ExPro = require('../model/exproModel');

exports.addInfopro = async (req, res) => {
  try {
    const newExPro = new ExPro(req.body);
    const expro = await newExPro.save();
    res.status(201).json(expro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'ajout de l'information professionnel" });
  }
};

exports.updateInfopro = async (req, res) => {
  try {
    const infopro = await ExPro.findByIdAndUpdate(req.params.expro_id, req.body, {
      new: true,
    });

    if (!infopro) {
      return res.status(404).json({ message: 'Information personnelle non trouvée' });
    }

    res.status(200).json(infopro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour de l'information personnelle" });
  }
};

exports.deleteInfopro = async (req, res) => {
  try {
    const infopro = await ExPro.findByIdAndDelete(req.params.expro_id);

    if (!infopro) {
      return res.status(404).json({ message: 'Information personnelle non trouvée' });
    }

    res.status(200).json({ message: 'Information personnelle supprimée' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'information personnelle" });
  }
};

exports.getInfopro = async (req, res) => {
  try {
    const infopro = await ExPro.find();

    if (!infopro) {
      return res.status(404).json({ message: 'Information personnelle non trouvée' });
    }

    res.status(200).json(infopro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération de l'information personnelle" });
  }
};
