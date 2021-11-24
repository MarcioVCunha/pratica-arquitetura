
const auth = async (req, res, next) => {
  const authorization = req.headers.authorization || "";
  const token = authorization.split('Bearer ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  req.token = token;

  next();
};

export default auth;