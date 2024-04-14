# Port Folio 📖

![Static Badge](https://img.shields.io/badge/v.1.0.0-red)
![Static Badge](https://img.shields.io/badge/NODE_JS-green?logo=nodedotjs)
![Static Badge](https://img.shields.io/badge/REACT-blue?logo=react)
![Static Badge](https://img.shields.io/badge/docs_api-SWAGGER-orange?logo=swagger)

## Description 🤔

Il s’agit d’une plateforme interactive qui met en valeur mes compétences et réalisations en développement web.
Sur le plan technique, Port Folio fonctionne en tandem avec une API pour gérer les données.
Le frontend de l’application comprend une interface utilisateur (front office) pour gérer les données de manière efficace et intuitive.

## Installation 🪶

Pour installer et exécuter ce projet localement, suivez ces étapes :

```bash
git clone https://github.com/remimoul/port-folio
cd port-folio
npm install
npm start
```

## Lancement de l'API 🚀

1. **Accédez au dossier de l'API** : Naviguez vers le dossier `API` qui contient les fichiers de l'API.

2. **Installer les dépendances de l'API** :

```bash
cd API
npm install
```

3. **Configuration des variables d'environnement** :

Un fichier `.env.sample` est fourni à la racine du projet. Ce fichier sert d'exemple pour la création de votre propre fichier `.env`.

Copiez le contenu du fichier `.env.sample` dans un nouveau fichier que vous nommerez `.env`.

Ensuite, remplacez les valeurs par défaut par vos propres valeurs pour `JWT_KEY` et `MONGO_URL`.

- `JWT_KEY` : Il s'agit de votre clé secrète pour le jeton JWT.
- `MONGO_URL` : Il s'agit de l'URL de votre serveur MongoDB, que ce soit en local ou en ligne.

4. **Lancez l'API** : Une fois dans le dossier `API`, lancez l'API en utilisant la commande `npm start`.

Assurez-vous de remplacer `JWT_KEY` et `MONGO_URL` par vos propres valeurs.

## ​🔐​ Procédure d'Authentification ​🔑​

Ce projet utilise des variables d'environnement pour gérer les paramètres de configuration.

Un fichier `.env.sample` est fourni à la racine du projet.

Pour les définir, vous devez créer un fichier `.env` à la racine du projet.

Voici un exemple de contenu pour le fichier `.env` :

`REACT_APP_API_URL=http://localhost:3005`

## ​🔥​ Documentation des Routes de l'API avec Swagger ​🔥​ ​🗂️​

Pour consulter la documentation des routes de l'API, accédez à l'interface Swagger en utilisant le lien suivant :

http://localhost:3005/api-docs/

## Guide d'utilisation de l'interface utilisateur 🦮

Pour utiliser l'interface utilisateur, suivez les étapes ci-dessous :

1. **Création d'un compte** : Vous pouvez créer un compte en utilisant Swagger ou Postman. Pour ce faire, utilisez la route `/user/register`.

2. **Connexion** : Une fois que vous avez créé votre compte, vous pouvez vous connecter en utilisant l'adresse de l'interface utilisateur. Par exemple, si vous exécutez l'application localement, vous pouvez vous connecter en utilisant l'URL `http://localhost:3000/login`.

## Contact 📲

Si vous souhaitez me contacter, vous pouvez m'envoyer un email à [votre email](mailto:remi.moul@my-digital-school.org) ou me suivre sur [LinkedIn](#).

## Licence 🪪

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
