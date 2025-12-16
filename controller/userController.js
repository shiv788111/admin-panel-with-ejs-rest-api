import db from "../config/db.js";


export function showUsers(req, res) {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).send("Database error");
    res.render("pages/addUser", { title: "Users List", users: results });
  });
}


export function showForm(req, res) {
  res.render("pages/form", { title: "Add User", user: {} });
}

// Show Edit Form
export function editForm(req, res) {
  const { id } = req.params;
  db.query("SELECT * FROM students WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.render("pages/form", { title: "Update User", user: result[0] });
  });
}

// Create User
export function createUser(req, res) {
  const { name, email, location } = req.body;
  db.query(
    "INSERT INTO students (name, email, location) VALUES (?, ?, ?)",
    [name, email, location],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Insert failed!" });
      res.status(201).json({ message: "User added successfully!" });
    }
  );
}

// Update User
export function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, location } = req.body;
  db.query(
    "UPDATE students SET name=?, email=?, location=? WHERE id=?",
    [name, email, location, id],
    (err) => {
      if (err) return res.status(500).json({ message: "Update failed!" });
      res.status(200).json({ title: "Update User",message: "User updated successfully!" });
    }
  );
}

// Delete User
export function deleteUser(req, res) {
  const { id } = req.params;
  db.query("DELETE FROM students WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send("Delete failed!");
    res.redirect("/users");
  });
}


