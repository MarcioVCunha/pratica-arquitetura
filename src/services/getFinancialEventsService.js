import jwt from 'jsonwebtoken';
import { checkUser } from '../repositories/userRepositorie.js';

const getEvents = async (token) => {
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return (401);
  }

  const events = checkUser(user);

  return events;
}

export default getEvents;