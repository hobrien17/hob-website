const express = require('express');
const router = express.Router();

router.get('/avltree', function(req, res, next) {
    let original = ["13", "10", "15", "5", "11", "", "16", "4", "8", "", "", "", "", "", ""];
    res.render('comp3506/avltree', { title: 'AVL Tree', hidemenu: true, original: original, toInsert: 3 });
});

router.post('/avltree/check', function(req, res) {
    let expected = ["13", "5", "15", "4", "10", "", "16", "3", "", "8", "11", "", "", "", ""];
    let arr = req.body["arr"];
    while (expected[expected.length - 1] === "") {
        expected.pop();
    }
    while (arr[arr.length - 1] === "") {
        arr.pop();
    }
    if (arr.length !== expected.length) {
        res.send(false);
        return;
    }
    for (let i = 0; i < expected.length; i++) {
        if (arr[i] !== expected[i]) {
            res.send(false);
            return;
        }
    }
    res.send(true);
});

module.exports = router;
