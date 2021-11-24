import getSumService from "../services/getSumService.js";

const getSum = async (req, res) => {
  try {
    const token = req.token;
    const sum = await getSumService(token);

    if (sum === 401) {
      res.sendStatus(401);
      return;
    }

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
export default getSum;