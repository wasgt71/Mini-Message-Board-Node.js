const { Router } = require("express");
const newRouter = Router();

newRouter.get("/new", (req, res) => {
  res.render("form", { data });
})


module.exports = newRouter;
