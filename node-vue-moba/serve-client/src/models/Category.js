
const moogoose = require('mongoose')
const schema = new moogoose.Schema({
  name: {
    type: String,
  },
  parent: {
    type: moogoose.SchemaTypes.ObjectId,
    ref:'Category'
  }
})
schema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Category'
})

schema.virtual('newsList', {
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Article'
})
module.exports = moogoose.model('Category', schema)