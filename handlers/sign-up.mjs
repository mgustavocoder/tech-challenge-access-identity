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
  const { email, nome, cpf, senha } = JSON.parse(event.body);
  const params = {
    ClientId: process.env.CLIENT_ID,
    Username: email,
    Password: senha,
    UserAttributes: [
      {
        Name: 'email',
        Value: email
      },
      {
        Name: 'name',
        Value: nome
      },
      {
        Name: 'custom:cpf',
        Value: cpf
      }
    ]
  };
  
  const signUp = await cognito.signUp(params).promise();
  console.log('SignUp successful:', signUp);

  const confirmParams = {
    UserPoolId: process.env.USER_POOL_ID,
    Username: email
  };

  const confirmSignUp = await cognito.adminConfirmSignUp(confirmParams).promise();
  console.log('Confirm SignUp successful:', confirmSignUp);

  const response = {
    statusCode: 200,
    body: JSON.stringify({})
  };

  return response;
};
  