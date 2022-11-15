const router = require('express').Router();
const Item = require('./Item')


router.get("/menu", async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err)
    }
}).post("/add", async (req, res) => {
    try {

        const newItem = new Item(
            {
                title: req.body.title,
                amount: req.body.amount,
                imageLink: req.body.imageLink,
            }
        );

        await newItem.save();

        res.status(200).json("Item has been added");
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router