var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    // return greeting
    return res.status(200).json({ success: true, data: "hello" });
});

/* POST home page. */
router.post("/:id/", function (req, res, next) {
    // return greeting
    if (!req.body.name || !req.body.age)
        return res
            .status(405)
            .json({ success: false, message: "all fields required" });

    return res.status(200).json({ success: true, data: "hello" });
});

module.exports = router;
