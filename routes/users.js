var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
    // res.status(200).send({
    //     success: true,
    //     data: [{ user: "tony" }, { user: "lisa" }],
    // });
});

module.exports = router;
