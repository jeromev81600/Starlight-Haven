const models = require("../models");

const browse = (req, res) => {
  models.backpack
    .findAll()
    .then(([rows]) => {
      if (rows.length) {
        res.status(200).send(rows);
      } else {
        res.status(400).send("Bad Request");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const read = (req, res) => {
  models.backpack
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.status(404).send("Not found");
      } else {
        res.status(200).send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getBackPacksByBivouacId = (req, res) => {
  models.backpack
    .findBackPacksByBivouac(req.params.id)
    .then(([rows]) => {
      if (rows == null) {
        res.status(404).send("Not found");
      } else {
        res.status(200).send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const edit = (req, res) => {
  const backpack = req.body;

  // TODO validations (length, format...)

  backpack.id = parseInt(req.params.id, 10);

  models.backpack
    .update(backpack)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(400).send("Bad request");
      } else {
        res.status(204).send("Updated");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const add = (req, res) => {
  const backpack = req.body;

  // TODO validations (length, format...)

  models.backpack
    .insert(backpack)
    .then(([result]) => {
      res.location(`/backpacks/${result.insertId}`).status(201).send("Created");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const destroy = (req, res) => {
  models.backpack
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.status(204).send("Deleted");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  browse,
  read,
  getBackPacksByBivouacId,
  edit,
  add,
  destroy,
};
