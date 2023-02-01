const { Router } = require("express");
const { findAllUsers, findUserById, createUser, updateUserById, desableUserById } = require("../controllers/users.controller");

const router = Router()

router.get("", findAllUsers)
router.get("/:id", findUserById)

router.post("", createUser)

router.patch("/:id", updateUserById)

router.delete("/:id", desableUserById)

module.exports = {
    UsersRouter: router
}