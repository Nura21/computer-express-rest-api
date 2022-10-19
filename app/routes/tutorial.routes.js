module.exports = app => {
    const dataCpus = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", dataCpus.create);
  
    // Retrieve all dataCpus
    router.get("/", dataCpus.findAll);

    app.use('/api/dataCpus', router);
  };