const User = require("../model/User");
const jwt = require("jsonwebtoken");

const isAuth = async(req, res, next) => {
  try {
    const token = req.headers["authorization"]
    console.log(token)
    if (!token) {
      return (
        res.status(401).send({ errors: [{ msg: " you are not authorized !" }] })
      );
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);

    //find with id
    const userToFind = await User.findById({ _id: decoded.id });

    if (!userToFind) {
      return (
        res.status(401).send({ errors: [{ msg: " you are not authorized !!" }] })
      );
    }
    req.user = userToFind;
    next();
  } catch (error) {
    return (
      res.status(401).send({ errors: [{ msg: " you are not authorized !!!" }] })
    );
  }
};

module.exports = isAuth;
