const db = require("../models");
const DataCpu = db.dataCpu;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({ message: "Content can not be empty!" });
    //   return;
    // }
  
    // Data Example
    // _id: 5b453fb83de88413bc523928,
	// cpuname: 'SafeClick_CPU',
	// type: 'Windows_NT',
	// platform: 'win32',
	// release: '10.0.17134',
	// remainingRam: 11338039296,
	// totalRam: 17063497728



    // Create a Tutorial
    const dataCpu = new DataCpu({
        cpuname: req.body.cpuname ?? "SafeClick_CPU",
        type: req.body.type ?? "Windows_NT",
        platform: req.body.platform ?? "win32",
        release: req.body.release ?? "10.0.17134",
        remainingRam: req.body.remainingRam ?? "11338039296",
        totalRam: req.body.totalRam ?? "17063497728"
    });
  
    // Save Tutorial in the database
    dataCpu
      .save(dataCpu)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const cpuname = req.query.cpuname;
    var condition = cpuname ? { cpuname: { $regex: new RegExp(cpuname), $options: "i" } } : {};
  
    DataCpu.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };