const jwt = require('jsonwebtoken');

const jwt_key = 'aniketchougule';

const isValidToken = async (req, res, next) => {
// check if authentication header exists
  // if(req.headers.authorization)
  if(req.header('token'))
  {
    try {
    const token = req.header('token');
    // const token = req.headers.authorization.split(" ")[1]; //get the token
    // console.log('token', token)

    if (!token) {
        return res.status(401).json({
            status: false,
            msg: "Unauthorized! Please login",
          });
    } else {
        const decode = jwt.verify(token, jwt_key);
        // console.log('decode', decode);
        // req["AuthenticateUser"] = decode;
        user_token = decode;
        // console.log('req.user', req.user)
        next();
    }
        
    } catch (error) {
        return res.status(401).json({
            status: false,
            msg: "Unauthorized! Please login",
        });
    }
  }
  else
  {
    return res.status(401).json({
      status: false,
      msg: "Unauthorized! Please login",
    });
  }
};

module.exports = {
    isValidToken
};