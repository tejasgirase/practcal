module.exports = {
    getUserList: getUserList
};

async function getUserList() {
    var connection = require('../config/db.connection');
    const results = await connection.query('select * from users');
    console.log(results);
    return (results ? results : false);
}