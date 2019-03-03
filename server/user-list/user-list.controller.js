const express = require('express');
const router = express.Router();
const {getUserList} = require('./user-list.service');
router.get('/', getUsersList);

async function getUsersList(req, res) {
    const response = await getUserList();
    console.log(response);
    res.status(200).json(response).end();
}
module.exports = router;