import { Router } from "express";
import { showUsers, showForm, createUser, editForm, updateUser, deleteUser} from "../controller/userController.js";

const router = Router();

// Show all users
router.get("/users", showUsers);

// Show Add User form
router.get("/users/add", showForm);

// Show Edit User form
router.get("/users/edit/:id", editForm);

// Add User
router.post("/users/add", createUser);

// Update User
router.post("/users/update/:id", updateUser);

// Delete User
router.get("/users/delete/:id", deleteUser);




export default router;
