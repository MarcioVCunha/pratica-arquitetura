import connection from "../database.js";

const checkEmail = async (email) => {
  return await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );
}

const checkUser = async (user) => {
  return await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [user.id]
  );
}

const insertUser = async (name, email, hashedPassword) => {
  return await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}

export { insertUser, checkUser, checkEmail };