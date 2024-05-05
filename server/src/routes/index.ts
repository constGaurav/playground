import { Router } from "express";

const routes = Router();

routes.get("/files", (req, res) => {
  res.send("files list");
});

routes.get("/files/content", (req, res) => {
  res.send("files content");
});

export default routes;
