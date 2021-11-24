import connection from "../database.js";

const getEvent = async (user) => {
  return await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [user.id]
  );
}

const insertEvent = async (user, value, type) => {
  await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [user.id, value, type]
  );
}

export { getEvent, insertEvent };