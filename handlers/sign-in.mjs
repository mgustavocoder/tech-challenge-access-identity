import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
});

const cognito = new AWS.CognitoIdentityServiceProvider();


export const lambdaHandler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
  }
  console.info('received:', event);
  const { email, senha } = JSON.parse(event.body);

  const loginParams = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: process.env.CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: senha
    }
  };
  
  const loginResponse = await new Promise((resolve, reject) => {
    cognito.initiateAuth(loginParams, (err, data) => {
      if (err) {
        reject('Login error: ' + err);
      } else {
        resolve('Login success: ' + JSON.stringify(data));
      }
    });
  });

  const response = {
    statusCode: 200,
    body: loginResponse
  };

  return response;
  };
  