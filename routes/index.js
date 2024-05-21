var express = require("express");
var router = express.Router();

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

router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", function (req, res) {
  messages.push({
    user: req.body.user,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
