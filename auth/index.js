const jwt = require('jsonwebtoken');
const error = require('../utils/error');
const config = require('../config');

const secret = config.jwt.secret;

function sign(data) {
  data = JSON.parse(JSON.stringify(data))
  return jwt.sign(data, secret);

}
    


const verify = (token) => {
    return jwt.verify(token, secret)
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);

    if (decoded.id !== owner) {
      throw error('No puedes modificar', 401);
    }
    console.log(decoded);
  },
  logged: function (req) {
      const decoded = decodeHeader(req)
  },
};


const getToken = (auth) => {
  if (!auth) {
    throw error("No viene token",401);
  }

  if (auth.indexOf("Bearer ") === -1) {
    throw error("Formato inválido", 401);
  }

  let token = auth.replace("Bearer ", "");
  return token;
};

const decodeHeader = (req) => {
  // decodificar el token
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;
  return decoded;
};




module.exports = {
    sign,
    check,
}