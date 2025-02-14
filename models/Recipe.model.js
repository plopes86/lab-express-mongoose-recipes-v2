// Your code here ...
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const recipesSchema = new Schema({
    title: {type:String, required: true, unique: true},
    instructions: {type:String},
    level: {type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
    ingredients: {type: [String]},
    image: {type:String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
    duration: {type: Number, min: 0},
    isArchived: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Recipe", recipesSchema);