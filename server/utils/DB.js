const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://notes:FWXjQvXcCAdsPMto@cluster0ritu.adt1u.mongodb.net/edtech?retryWrites=true&w=majority'
  );
};
