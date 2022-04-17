## How to implement
### frontend:
1. npx create-react-app react-google-login
2. npm install react-google-login
3. edit App.js
4. create h1 for app name.
6. define loginData state hook
7. check loginData and render content
8. if loginData is null render GoogleLogin component
9. if logiņData isn't null render you are logged in message.
10. implement handleLogout
11. implement handleFailure
12. implement handleLogin   


## google cloud platform
1. login to google
2. go to https://console.cloud.google.
3. create a project
4. go to api credential
5. accept consent screen
6. craete oauth client id
7. craete .env file and save it as REACT_APP_GOOGLE_CLIENT_ID


### backend:
1. create server.js file
2. npm install express dotenv google-auth-library
3. config dotenv
4. create 0Auth2Client client
5. create express server
6. use express.json()
7. define app.post('/api/google-login', ..
8. define app.listen