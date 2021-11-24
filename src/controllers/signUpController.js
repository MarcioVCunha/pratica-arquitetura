import signUpUser from "../services/signUpUserService.js";

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const checkSignUp = await signUpUser(email, password, name);

    if(checkSignUp === 409){
      return res.sendStatus(409);
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default signUp;