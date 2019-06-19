const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
// mongodb://<dbuser>:<dbpassword>@ds041821.mlab.com:41821/aluno10db
// mongodb://localhost/aluno10db

mongoose.connect(`mongodb://${process.env.DB_URL}:27017/aluno10`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;