const { default: mongoose } = require("mongoose");

const bdConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: Succsesfully`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = bdConnect;
