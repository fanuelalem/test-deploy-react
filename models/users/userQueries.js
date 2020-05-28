const SELECT_ALL_USERS = "SELECT * FROM info;";
const INSERT_USER = "INSERT INTO info (name,email) VALUES (?,?);";
const DELETE_BY_ID = "DELETE FROM info WHERE id = ?;";
const SELECT_USER_BY_ID = "SELECT * FROM info where id=?;";
const UPDATE_BY_NAME = "UPDATE info SET NAME = ? WHERE id = ?;";



module.exports = {
    SELECT_ALL_USERS,
    INSERT_USER,
    DELETE_BY_ID,
    SELECT_USER_BY_ID,
    UPDATE_BY_NAME
}