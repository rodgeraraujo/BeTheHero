const express = require("express");
const routes = express.Router();

const OngController = require("../controllers/OngController");
const IncidentController = require("../controllers/IncidentController");
const ProfileController = require("../controllers/ProfileController");
const SessionController = require("../controllers/SessionController");

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

// hello api router
routes.get("/", (request, respose) => {
  respose.status(200).json({
    message: "Hello BeTheHero API",
    version: "v1.0.0",
    author: "Rogério Araújo"
  });
});

module.exports = routes;
