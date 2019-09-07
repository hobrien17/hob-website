const createError = require('http-errors');
const express = require('express');
const auth = require('../util/auth');
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

router.get('/feedback', function(req, res, next) {
    if (!auth.isStudent(req.user)) {
        next(createError(403));
    }

    res.render('comp3506/feedback', { title: 'COMP3506 Feedback Form', hidemenu: true, username: req.user.user });
});

router.post('/feedback/submit', function(req, res) {
    let feedback = req.body["feedback"];
    let target = req.body["target"];
});

module.exports = router;
