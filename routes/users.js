var express = require('express');
var id = require('../components/Identification');
var router = express.Router();

/**
 * @typedef User - model for an email
 * @property {string} name.required - Full Name
 * @property {number} salary.required - Salary in USD
 * @property {string} dob.required - Date of Birth
 */

 /**
 * Get an identfier for a user
 * @route POST /users/identify
 * @group email - Operations to send emails
 * @param {User.model} email.body.required - the email
 * @returns {object} 200 - user id generated succesfully
 * @returns {Error}  400 - invalid user name
 * @returns {Error}  default - Unexpected error
 */
router.post('/identify', function(req, res, next) {
    if (req.body.name)
    {
        var identification = new id.Identification(req.body.name);
        var identifier = identification.getIdentifier();
        res.json({'identifier':identifier});
    }
    else
        res.status(400);
});

module.exports = router;
