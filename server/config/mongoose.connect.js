const mongoose = require("mongoose");
const password = process.env.PASSWORD;
main().catch((err) => console.error(`error in mongoose connection ${err}`));
async function main() {
  await mongoose.connect(
    `mongodb+srv://<bank>:<Nikhil123>@sbs.loeaywr.mongodb.net/?retryWrites=true&w=majority&appName=sbs`
  );
  console.log("mongoose connected");
}
