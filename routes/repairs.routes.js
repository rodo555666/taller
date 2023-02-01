const { Router } = require("express");
const { findAllRepairs, findRepairById, createRepair, updateRepairById, desableRepairById } = require("../controllers/repairs.controllers");

const router = Router()

router.get("", findAllRepairs)
router.get("/:id", findRepairById)

router.post("", createRepair)

router.patch("/:id", updateRepairById)

router.delete("/:id", desableRepairById)

module.exports = {
    RepairsRouter: router
}