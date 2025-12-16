import express from "express";
import userRoutes from "./routes/userRoutes.js"
import messagesRouter from "./routes/messageRoutes.js"
import db from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 5000;


app.set("view engine", "ejs");
app.set("views", "./views");


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("layout", { title: "Admin Panel" });
});


app.use('/messages', messagesRouter);



//api

app.use("/",userRoutes);


app.listen(PORT, () => {
  console.log(` Server running at: http://localhost:${PORT}`);
  console.log(`Admin UI: http://localhost:${PORT}/`);
});
