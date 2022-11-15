const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        },
        amount: {
            type: Number,
            required:true,
            min:0
        },
        imageLink: {
            type: String,
            required:true
        }
    },
);

module.exports = mongoose.model("Item", ItemSchema);