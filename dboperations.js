var config = require("./dbconfig");
const sql = require("mssql");

async function getCards() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from Cards");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCards: getCards,
};
