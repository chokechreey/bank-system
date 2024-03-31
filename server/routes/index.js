const express = require("express");
const router = express.Router();
router
  .get("/", (req, res) => {
    return res.send(`this is an api url`);
  })
  .use("/customer", require("./customer"));

module.exports = router;
