
const moogoose = require('mongoose')
const schema = new moogoose.Schema({
  title: {
    type: String,
  },
  categories: [{
    type: moogoose.SchemaTypes.ObjectId,
    ref:'Category'
  }],
  body: {
    type:String
  } 
},{
  timestamps:true
})

module.exports = moogoose.model('Article', schema)