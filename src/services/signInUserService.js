import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { checkEmail } from '../repositories/userRepositorie.js';

const authenticate = async (password, email) => {
  const user = await checkEmail(email);

  if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) {
    return (401);
  }

  const token = jwt.sign({
    id: user.rows[0].id
  }, process.env.JWT_SECRET);

  return token;
}

export default authenticate;
