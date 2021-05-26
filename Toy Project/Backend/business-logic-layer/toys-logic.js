const dal = require("../data-access-layer/dal");

async function getAllToysAsync() {
    // const sql = `SELECT toys.* , targetAudienceName
    //             FROM toys JOIN targetAudience 
    //             ON targetaudience.targetAudienceId = toys.targetAudienceId`; // sending all columns as-is
    const sql = `SELECT * FROM toys`;
    const toys = await dal.executeAsync(sql);
    return toys;
}

// async function getAllTargetAudienceAsync() {
//     const sql = "SELECT * FROM targetaudience"; // sending all columns as-is
//     const targetAudience = await dal.executeAsync(sql);
//     return targetAudience;
// }

async function addToyAsync(toy) {
    const sql = `INSERT INTO toys 
    VALUES ( '${toy.toyId}','${toy.toyName}', '${toy.description}', ${toy.targetAudienceName}, ${toy.price})`;
    const info = await dal.executeAsync(sql);
    // toy.toyId = info.insertId; // this is the new created id.
    return toy;
}
async function deleteToyAsync(id) {
    const sql = `DELETE FROM toys WHERE toyId = ${id}`;
    await dal.executeAsync(sql);
}


module.exports = {
    getAllToysAsync,
    // getAllTargetAudienceAsync,
    addToyAsync,
    deleteToyAsync
}