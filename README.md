# Estructura de proyecto REACT/NODE

Estructura para proyecto estándar con React/Node, creada con Vite y usando GraphQL, subscripciones y MongoDB, con las dependencias y scripts más típicos.

- **Frontend:**
  - react-router-dom
  - eslint
  - graphql
  - @apollo/client
  - subscriptions-transport-ws

- **Backend:**
  - nodemon
  - cors
  - dotenv
  - express
  - jsonwebtoken
  - express-async-errors
  - bcrypt
  - @graphql-tools/schema
  - subscriptions-transport-ws
  - mongoose-unique-validator"
  - mongoose
  - lodash
  - graphql-subscriptions
  - graphql
  - apollo-server-express
  - apollo-server

Además, ya viene con algunos componentes, y funciones para que todo sea funcional y puedas probarlo y suarlo como guia.

Tambien de por si manda un header para autorizacion, el token lo saca del localstorage, fijarse con que nombre lo busca y si usa otro recuerde cambiarlo

## Guía de pasos

1. Clonar el repositorio:
    ``` 
    git clone --depth=1 https://github.com/locodasi/estructura-React_Node-GraphQL.git 
    ```
2. Crear un archivo `.env` en el backend con este código:
    ```
    MONGODB_URL = tu URL a tu BD
    JWT_SECRET = "secret (podes poner lo que quieras)"
    ```
3. Ejecutar los siguientes comandos:
    ```bash
    cd backend
    npm install
    npm run dev
    ```
4. Si cambiaste el valor del PORT en el backend ir a main.jsx de la carpeta frontend y cambiar el valor de uri en httpLink y wsLink
5. Abrir otra terminal y ejecutar los siguientes comandos:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
6. Listo, a personalizar
