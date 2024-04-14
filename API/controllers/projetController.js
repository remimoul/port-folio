const Projet = require('../model/projetModel');

exports.addProjet = async (req, res) => {
  try {
    const newProjet = new Projet(req.body);
    const projet = await newProjet.save();
    res.status(201).json(projet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'ajout du projet" });
  }
};

exports.updateProjet = async (req, res) => {
  try {
    const projet = await Projet.findByIdAndUpdate(req.params.projet_id, req.body, {
      new: true,
    });

    if (!projet) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    res.status(200).json(projet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du projet' });
  }
};

exports.deleteProjet = async (req, res) => {
  try {
    const projet = await Projet.findByIdAndDelete(req.params.projet_id);

    if (!projet) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    res.status(200).json({ message: 'Projet supprimé' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du projet' });
  }
};

exports.getProjet = async (req, res) => {
  try {
    const projet = await Projet.find();

    if (!projet) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    res.status(200).json(projet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du projet' });
  }
};
