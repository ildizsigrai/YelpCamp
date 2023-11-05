const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

//add a username, field for password, make sure that usernames are not duplicated to the UserSchemam
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
