const db = require("../../data/db-config");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get(query){
    const {page=1,limit=10,sortby="id",sortdir="asc"} = query;
    const offset = limit*(page-1);
    const rows = db("users")
    .orderBy(sortby,sortdir)
    .limit(limit)
    .offset(offset);
    return rows;
};
function getById(id){
    return db("users")
    .where({id})
    .first();
};
async function insert(newUser){
    const [id] = await db("users").insert(newUser);
    return getById(id);
};
function update(id,changes){
    return db("user")
    .where({id})
    .update(changes)
    .then(row=>{
        return getById(id);
    })
};
function remove(id){
    return db("users")
    .where("id",id)
    .del();
};


