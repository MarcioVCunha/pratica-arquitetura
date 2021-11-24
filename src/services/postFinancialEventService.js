import jwt from 'jsonwebtoken'
import { insertEvent } from '../repositories/eventRepositorie.js';

const postTransaction = async (token, value, type) => {
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return (401);
  }

  if (!value || !type) {
    return (400);
  }

  if (!['INCOME', 'OUTCOME'].includes(type)) {
    return (400);
  }

  if (value < 0) {
    return (400);
  }

  await insertEvent(user, value, type);

  return (200);
}

export default postTransaction;