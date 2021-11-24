import jwt from 'jsonwebtoken';
import { getEvent } from '../repositories/eventRepositorie.js';

const getSumService = async (token) => {
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return (401)
  }

  const events = await getEvent(user);

  return events.rows.reduce((total, event) => event.type === 'INCOME' ? total + event.value : total - event.value, 0);
}

export default getSumService;