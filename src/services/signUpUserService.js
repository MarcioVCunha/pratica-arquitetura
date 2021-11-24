import bcrypt from 'bcrypt';
import { insertUser, checkEmail } from "../repositories/userRepositorie.js";

const signUpUser = async (email, password, name) => {
  
  const existingUserWithGivenEmail = await checkEmail(email);

  if (existingUserWithGivenEmail.rows[0]) {
    return (409);
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  await insertUser(name, email, hashedPassword);

}

export default signUpUser;