import jwt from 'jsonwebtoken';

export const lambdaHandler = async (event, context) => {
  const token = getTokenFromHeader(event.headers);
  const decodedToken = jwt.decode(token, { complete: true });

 const response = {
    statusCode: 200,
    body: JSON.stringify({
      name: decodedToken.payload.name,
      cpf: decodedToken.payload["custom:cpf"],
      email: decodedToken.payload.email
    })
  };
 return response;
};

const getTokenFromHeader = (headers) => {
  const authHeader = headers['Authorization'] || headers['authorization'];
  if (!authHeader) {
    throw new Error('No Authorization header found');
  }
  const token = authHeader.split(' ')[1];
  return token;
};