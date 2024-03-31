const express = require("express");
const router = express.Router();
const customer = require("../controllers/customer");
router
  .get("/allCustomer", customer.allCustomer)
  .get("/customer/:id", customer.customerDetail)
  .post("/transfer", customer.transfer);

module.exports = router;
