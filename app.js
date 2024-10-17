const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
// app.js
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];
  
  const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  const users = ["Rose", "Cake", "Biff"];

   

  app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
    res.render("index", { links: links, users: users });
  });
  

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//app.get("/", (req, res) => {
  //  res.render("index", { message: "EJS rocks!" });
  //});
  

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

//app.get("/", (req, res) => res.send("Hello, world!"));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});


