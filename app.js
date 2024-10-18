const express = require("express");
const app = express();
const newRouter = require("./routes/newRouter");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");


/*const messages = [
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
];*/


 //app.get("/index", (req, res) => {
 // res.render("index", { title: "Mini Messageboard", messages: messages });
  
//});

app.get("/new", (req, res) => {
res.render("Form");

});

app.get("/form", (req, res) => {
res.render("Form");
  
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
