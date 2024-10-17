const { Router } = require("express");
const newRouter = Router();

newRouter.get("/form", (req, res) => res.send(data));
newRouter.get("/:newId", (req, res) => {
  const { newId } = req.params;
  res.send(`New ID: ${newId}`);
});

module.exports = newRouter;