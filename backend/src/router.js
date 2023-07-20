const express = require("express");

const router = express.Router();

const UserHasBivouacControllers = require("./controllers/UserHasBivouacControllers");
const UserControllers = require("./controllers/UserControllers");
const BivouacControllers = require("./controllers/BivouacControllers");
const EquipmentControllers = require("./controllers/EquipmentControllers");
const BackpackControllers = require("./controllers/BackpackControllers");
const BackpackHasBivouacControllers = require("./controllers/BackpackHasBivouacControllers");
const { hashPassword, verifyToken, verifyPassword } = require("../auth");
const { validateUser } = require("../validators");

const { verifyAdminCredentials } = UserControllers;

// ----------------------------------------- Public routes -------------------------------------------

router.post("/users", hashPassword, validateUser, UserControllers.add);
router.post(
  "/users/login",
  UserControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/userhasbivouacs", UserHasBivouacControllers.browse);
router.get("/userhasbivouacs/:id", UserHasBivouacControllers.read);
router.post("/userhasbivouacs", UserHasBivouacControllers.add);

router.get("/bivouacs", BivouacControllers.browse);
router.get("/bivouacs/:id", BivouacControllers.read);
router.post("/bivouacs", BivouacControllers.add);

router.get("/equipments", EquipmentControllers.browse);
router.get("/equipments/:id", EquipmentControllers.read);
router.post("/equipments", EquipmentControllers.add);

router.get("/backpacks", BackpackControllers.browse);
router.get("/backpacks/:id", BackpackControllers.read);
router.post("/backpacks", BackpackControllers.add);

router.get("/backpackhasbivouacs", BackpackHasBivouacControllers.browse);
router.get("/backpackhasbivouacs/:id", BackpackHasBivouacControllers.read);
router.post("/backpackhasbivouacs", BackpackHasBivouacControllers.add);
// ---------------------------------------- Private Routes ----------------------------------------------

router.use(verifyToken);

router.get("/users/:id", UserControllers.read);
router.put("/users/:id", validateUser, UserControllers.edit);

// ----------------------------------------- Admin routes ------------------------------------------------

router.use(verifyAdminCredentials);

router.put("/userhasbivouacs/:id", UserHasBivouacControllers.edit);
router.delete("/userhasbivouacs/:id", UserHasBivouacControllers.destroy);

router.get("/users", UserControllers.browse);
router.post("/users", UserControllers.add);
router.delete("/users/:id", UserControllers.destroy);

router.put("/bivouacs/:id", BivouacControllers.edit);
router.delete("/bivouacs/:id", BivouacControllers.destroy);

router.put("/equipments/:id", EquipmentControllers.edit);
router.delete("/equipments/:id", EquipmentControllers.destroy);

router.put("/backpacks/:id", BackpackControllers.edit);
router.delete("/backpacks/:id", BackpackControllers.destroy);

router.put("/backpackhasbivouacs/:id", BackpackHasBivouacControllers.edit);
router.delete(
  "/backpackhasbivouacs/:id",
  BackpackHasBivouacControllers.destroy
);

module.exports = router;
