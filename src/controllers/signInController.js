import authenticate from "../services/signInUserService.js";

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const token = await authenticate(password, email);

    if(token === 401){
      return res.sendStatus(401);
    }

    res.send({
      token
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default signIn;