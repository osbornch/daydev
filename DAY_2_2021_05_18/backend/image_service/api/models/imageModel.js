var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ImageSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the image'
      },
      Created_date: {
        type: Date,
        default: Date.now
      },
      status: {
        type: [{
          type: String,
          enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
      }
});

module.exports = mongoose.model('Images', ImageSchema);
