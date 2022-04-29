const express = require('express');
const router = express.Router();

//Item db model... We do this so that we are able to say 'Item.DELETE or Item.GET or Item.POST'
const Item = require('../../models/Item');

// @route GET api
// @descirption : Get all items
// @access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
});
//Note If we did this inside the sever.js file, we would say 'app.get' instead of 'router.get'
// Also we would have to say router.get('/api/items');

// @route POSTapi
// @descirption : post an item
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

// @route DELETE api
// @descirption : delete an items
// @access Public


//Note that below is a very nice example of using a callback inside of another callback
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).
    then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false})); 
});


module.exports = router;