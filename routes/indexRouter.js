const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
  });

indexRouter.post("/new", (req, res) => {
  const { inputAuthor, inputMessage } = req.body;
  messages.push({text:inputMessage,user:inputAuthor,added:new Date()});
  console.log(messages);
  res.redirect("/")
});


module.exports = indexRouter;
