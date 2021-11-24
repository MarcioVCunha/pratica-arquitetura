import postTransaction from "../services/postFinancialEventService.js";

const postFinancialEvent = async (req, res) => {
  try {
    const token = req.token;
    const { value, type } = req.body;
    const checkPost = await postTransaction(token, value, type);

    if(checkPost !== 200){
      return res.sendStatus(checkPost);
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default postFinancialEvent;