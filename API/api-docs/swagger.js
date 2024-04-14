/**
 *  _    _ _____ _____ 
 * | |  | |_   _|  __ \
 * | |  | | | | | |  | |
 * | |  | | | | | |  | |
 * | |__| |_| |_| |__| |
 *  \____/|_____|_____/
 *                     
 */
  
  /**
   * @swagger
   * /user/login: 
   *  post:
    *    tags:
   *      - Utilisateur
   *    summary: Connecter un utilisateur
   *    description: ✔️ Login a user 
  *    parameters:
   *      - in: body
   *        name: user
   *        description: The user to login
   *        schema:
   *          type: object
   *          required:
   *            - email
   *            - password
   *          properties:
   *            email:
   *              type: string
   *            password:
   *              type: string
   *    responses:
   *      '200':
   *        description: A successful response
   */


    
    /**
   * @swagger
   * /user/register:
   *  post:
    *    tags:
   *      - Utilisateur
   *    summary: Enregistrer un nouvel utilisateur
   *    description: ✔️ Register a new user
   *    parameters:
   *      - in: body
   *        name: user
   *        description: The user to login
   *        schema:
   *          type: object
   *          required:
   *            - email
   *            - password
   *          properties:
   *            email:
   *              type: string
   *            password:
   *              type: string
   *    responses:
   *      '200':
   *        description: A successful response
   */



      /**
   * @swagger
   * /user/{id_user}:
   *  put:
    *    tags:
   *      - Utilisateur
   *    summary: Mettre à jour un utilisateur
   *    description: ✔️ update user
  *    parameters:
   *      - in: header
   *        name: Authorization
   *        schema:
   *          type: string
   *        required: true
   *        description: Token d'authentification
   *      - in: path
   *        name: id_user
   *        description: ID of the user to update
   *        required: true
   *        type: string
   *      - in: body
   *        name: user
   *        description: User data to update
   *        schema:
   *          type: object
   *          required:
   *            - email
   *            - password
   *          properties:
   *            email:
   *              type: string
   *            password:
   *              type: string
   *    responses:
   *      '200':
   *        description: A successful response
   */

/**
 * @swagger
 * /projet/add:
 *   post:
 *     tags:
 *       - projet
 *     summary: Ajouter un nouveau projet
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: body
 *         name: project
 *         description: The project to add
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - description
 *             - imageUrl
 *             - link
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             imageUrl:
 *               type: string
 *             link:
 *               type: string
 *     responses:
 *       200:
 *         description: The added project
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             imageUrl:
 *               type: string
 *             link:
 *               type: string
 * /projet/update/{projet_id}:
 *   put:
 *     tags:
 *       - projet
 *     summary: Mettre à jour un projet
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: path
 *         name: projet_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the project to update
 *       - in: body
 *         name: project
 *         description: The new details of the project
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             imageUrl:
 *               type: string
 *             link:
 *               type: string
 *     responses:
 *       200:
 *         description: The updated project
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             imageUrl:
 *               type: string
 *             link:
 *               type: string
 * /projet/delete/{projet_id}:
 *   delete:
 *     tags:
 *       - projet
 *     summary: Supprimer un projet
 *     parameters:
 *       - in: path
 *         name: projet_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the project to delete
 *     responses:
 *       200:
 *         description: The deleted project
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 * /projet/all:
 *   get:
 *     tags:
 *       - projet
 *     summary: Afficher tous les projets
 *     responses:
 *       200:
 *         description: A list of projects
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 */

/**
 * @swagger
 * /expro/add:
 *   post:
 *     tags:
 *       - expériences professionnelles
 *     summary: Ajouter une nouvelle expérience professionnelle
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: body
 *         name: project
 *         description: The project to add
 *         schema:
 *           type: object
 *           required:
 *             - entreprise
 *             - annee
 *             - poste
 *             - description
 *             - logoUrl
 *           properties:
 *             entreprise:
 *               type: string
 *             annee:
 *               type: string
 *             poste:
 *               type: string
 *             description:
 *               type: string
 *             logoUrl:
 *               type: string
 *     responses:
 *       200:
 *         description: A successful response
 *         schema:
 *           type: object
 *           properties:
 *             entreprise:
 *               type: string
 *             annee:
 *               type: string
 *             poste:
 *               type: string
 *             description:
 *               type: string
 *             logoUrl:
 *              type: string
 * /expro/update/{expro_id}:
 *   put:
 *     tags:
 *       - expériences professionnelles
 *     summary: Mettre à jour un l'expeérience professionnelle
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: path
 *         name: expro_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the project to update
 *       - in: body
 *         name: project
 *         description: Les nouveaux détails experience professionnelle
 *         schema:
 *           type: object
 *           properties:
 *             entreprise:
 *               type: string
 *             annee:
 *               type: string
 *             poste:
 *               type: string
 *             description:
 *               type: string
 *             logoUrl:
 *              type: string
 *     responses:
 *       200:
 *         description: Mise à jour de l'expérience professionnelle
 *         schema:
 *           type: object
 *           properties:
 *             entreprise:
 *               type: string
 *             annee:
 *               type: string
 *             poste:
 *               type: string
 *             description:
 *               type: string
 *             logoUrl:
 *              type: string
 * /expro/delete/{expro_id}:
 *   delete:
 *     tags:
 *       - expériences professionnelles
 *     summary: Supprimer une expérience professionnelle
 *     parameters:
 *       - in: path
 *         name: expro_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the expro to delete
 *     responses:
 *       200:
 *         description: The deleted expro
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 * /expro/all:
 *   get:
 *     tags:
 *       - expériences professionnelles
 *     summary: Afficher toutes les expériences professionnelles
 *     responses:
 *       200:
 *         description: A list of expro
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 */

/**
 * @swagger
 * /infoperso/add:
 *   post:
 *     tags:
 *       - information personnelle
 *     summary: Ajouter une nouvelle information personnelle
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: body
 *         name: infoperso
 *         description: The infoperso to add
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - phone
 *             - github
 *             - linkedin
 *           properties:
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *             github:
 *               type: string
 *             linkedin:
 *               type: string
 *     responses:
 *       200:
 *         description: The added infoperso
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *             github:
 *               type: string
 *             linkedin:
 *               type: string
 * /infoperso/update/{infoperso_id}:
 *   put:
 *     tags:
 *       - information personnelle
 *     summary: Mettre à jour une information personnelle
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: path
 *         name: infoperso_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the infoperso to update
 *       - in: body
 *         name: infoperso
 *         description: The new details of the infoperso
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *             github:
 *               type: string
 *             linkedin:
 *               type: string
 *     responses:
 *       200:
 *         description: The updated infoperso
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *             github:
 *               type: string
 *             linkedin:
 *               type: string
 * /infoperso/delete/{infoperso_id}:
 *   delete:
 *     tags:
 *       - information personnelle
 *     summary: Supprimer une information personnelle
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: The authorization token
 *       - in: path
 *         name: infoperso_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the infoperso to delete
 *     responses:
 *       200:
 *         description: The deleted infoperso
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 * /infoperso/all:
 *   get:
 *     tags:
 *       - information personnelle
 *     summary: Retrieve all infopersos
 *     responses:
 *       200:
 *         description: A list of infopersos
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 */
  

  