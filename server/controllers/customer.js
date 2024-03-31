const User = require("../model/user.model");

module.exports.allCustomer = async function (req, res) {
  const user = await User.find();
  return res.json(user);
};
module.exports.customerDetail = async function (req, res) {
  const user = await User.findById(req.params.id);
  return res.status(200).json(user);
};
module.exports.transfer = async function (req, res) {
  const amount = +req.body.amount;
  const sender = await User.findOne({ name: req.body.user });
  sender.currentBalance = sender.currentBalance - amount;
  sender.save();
  const receiver = await User.findOne({ name: req.body.input });
  receiver.currentBalance = receiver.currentBalance + amount;
  receiver.save();
  return res.status(200).json({ message: "done" });
};
