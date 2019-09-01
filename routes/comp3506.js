const express = require('express');
const router = express.Router();

router.get('/avltree', function(req, res, next) {
    res.render('comp3506/avltree', { title: 'AVL Tree', hidemenu: true });
});

router.post('/avltree/check', function(req, res) {
    let arr = req.body.arr;
    while (arr[arr.length - 1] === "") {
        arr.pop();
    }
    if (arr === ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]) {
        res.json({"result": true});
    } else {
        res.json({"result": true});
    }
});

module.exports = router;
