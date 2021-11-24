import getEvents from "../services/getFinancialEventsService.js";

const getFinancialEvents = async (req, res) => {
  try {
    const token = req.token;
    const events = await getEvents(token);

    if (events === 401) {
      return res.sendStatus(401);
    };

    res.send(events.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default getFinancialEvents;