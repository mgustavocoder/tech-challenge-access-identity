API para cadastrar, autenticar e buscar informações dos clientes.

API rodando em funções Lambda, utilizando Cognito e API Gateway.


Para visualizar a documentação OpenAPI, cole o conteúdo do arquivo openapi.yaml no seguinte site:
https://editor.swagger.io/


Cadastrar cliente (endpoint público)
```
curl --request POST \
  --url https://{{host}}/Prod/sign-up/ \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.0.0' \
  --data '{
  "nome": "Fulano",
  "email": "fulano@test.com",
  "cpf": "8695745214",
  "senha": "p4ssw0rd!"
}'
```

Autenticar cliente (endpoint público)
```
curl --request POST \
  --url https://b43i2lpdeb.execute-api.us-east-1.amazonaws.com/Prod/sign-in/ \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.0.0' \
  --data '{
  "email": "fulano@test.com",
  "senha": "p4ssw0rd!"
}'
```

Buscar informações de cadastro do cliente (endpoint protegido com authorizador do cognito)
```
curl --request GET \
  --url https://vpd4ohexlf.execute-api.us-east-1.amazonaws.com/Prod/user-info/ \
  --header 'Authorization: Bearer eyJraWQiOiJhQ2YzNUNHZmJ6VXpNd1I5eVZzbk80T3k5KzlaekVsTVRqZXRMaCtyV3ZNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NDE4YzQyOC0xMDkxLTcwNmYtMTc0NC1jNGMwYTY1YTMxMjIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzVRd3FxcXFkMSIsImNvZ25pdG86dXNlcm5hbWUiOiI2NDE4YzQyOC0xMDkxLTcwNmYtMTc0NC1jNGMwYTY1YTMxMjIiLCJvcmlnaW5fanRpIjoiMDBmOWUzOGQtYmY0Yi00OTI4LWI0MDYtOTU4ZTgwMTJkNWNiIiwiYXVkIjoiY29pYmtqamlmanJhZ3RnczkybjgyOWppOSIsImV2ZW50X2lkIjoiMDQ4NmQyMTctMjZkNi00MzZiLTkyOTYtMjViMTM2NzNhMmIxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MjYyNTE3MDQsIm5hbWUiOiJDYXJsb3MiLCJleHAiOjE3MjYyNTUzMDQsImN1c3RvbTpjcGYiOiIzNzEwMDIyMzgwNiIsImlhdCI6MTcyNjI1MTcwNCwianRpIjoiZGI2YWY1MGEtZjcwZS00YTU2LTg2YTktYmY3MTI1ZTllMmFmIiwiZW1haWwiOiJzZXJnaW9AZ21haWwuY29tIn0.cUbbNqD_DZiEVAwz1RzJNsuUqwn30Zkhh2gSk0_NhT32NLfnyaa6SZgbj75O3GMB9HaO2xPARU3_gX2Gb1v-y3ndn7KtMPFqQhz8QSJhIi7yQnhYHnxIRgBAetw6KIL7pNl6PwGU4_j0JrY7TsEYaUrzcbJQpUQHMsB5WTL2_6-XcmWInbQ8Msjvq1Zk0k2-OXf0-W2B28y_6qofaIH7bUYwYnoN26XAD8BCNch-WGKMoNZri7YqdHzbCvhKKhJolipJi2IsnNV9pjIkoi4Ns7FZF0bhcNjBHVY8H2wQFiZq-I1CTwh10Dkdh5mrfWbMVbxZ8yD_-rnsWVFhJ8FgBA' \
  --header 'User-Agent: insomnia/10.0.0'
