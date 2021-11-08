const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlparser: true });
    console.log('Database Connected');
  } catch {
    console.log('Database Connectivity Error', error);
    throw new Error(error);
  }
};
