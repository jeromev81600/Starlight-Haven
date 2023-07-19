const express = require("express");

const router = express.Router();

const UserHasBivouacControllers = require("./controllers/UserHasBivouacControllers");
const UserControllers = require("./controllers/UserControllers");
const BivouacControllers = require("./controllers/BivouacControllers");
const EquipmentControllers = require("./controllers/EquipmentControllers");
const BackpackControllers = require("./controllers/BackpackControllers");
const BackpackHasBivouacControllers = require("./controllers/BackpackHasBivouacControllers");

router.get("/userhasbivouacs", UserHasBivouacControllers.browse);
router.get("/userhasbivouacs/:id", UserHasBivouacControllers.read);
router.put("/userhasbivouacs/:id", UserHasBivouacControllers.edit);
router.post("/userhasbivouacs", UserHasBivouacControllers.add);
router.delete("/userhasbivouacs/:id", UserHasBivouacControllers.destroy);

router.get("/users", UserControllers.browse);
router.get("/users/:id", UserControllers.read);
router.put("/users/:id", UserControllers.edit);
router.post("/users", UserControllers.add);
router.delete("/users/:id", UserControllers.destroy);

router.get("/bivouacs", BivouacControllers.browse);
router.get("/bivouacs/:id", BivouacControllers.read);
router.put("/bivouacs/:id", BivouacControllers.edit);
router.post("/bivouacs", BivouacControllers.add);
router.delete("/bivouacs/:id", BivouacControllers.destroy);

router.get("/equipments", EquipmentControllers.browse);
router.get("/equipments/:id", EquipmentControllers.read);
router.put("/equipments/:id", EquipmentControllers.edit);
router.post("/equipments", EquipmentControllers.add);
router.delete("/equipments/:id", EquipmentControllers.destroy);

router.get("/backpacks", BackpackControllers.browse);
router.get("/backpacks/:id", BackpackControllers.read);
router.put("/backpacks/:id", BackpackControllers.edit);
router.post("/backpacks", BackpackControllers.add);
router.delete("/backpacks/:id", BackpackControllers.destroy);

router.get("/backpackhasbivouacs", BackpackHasBivouacControllers.browse);
router.get("/backpackhasbivouacs/:id", BackpackHasBivouacControllers.read);
router.put("/backpackhasbivouacs/:id", BackpackHasBivouacControllers.edit);
router.post("/backpackhasbivouacs", BackpackHasBivouacControllers.add);
router.delete(
  "/backpackhasbivouacs/:id",
  BackpackHasBivouacControllers.destroy
);

module.exports = router;
