import express from "express";
import { PORT } from "./config.js";
const app = express();

app.get("/", (res, req) => {
  res.send("esarrrrrr");
});

app.post("/login", () => {});
app.post("/register", () => {});
app.post("/logout", () => {});
app.get("/protected", () => {});

app.listen(PORT, (res, req) => {
  console.log(`Server corriendo en el puerto http://localhost:${PORT}`);
});
