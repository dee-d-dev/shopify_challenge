# shopify_Backend_challenge

CRUD operations for an inventory tracking website as a part of Shopify Backend Task.

#### Framework used: Nodejs with Express 

## Local Deployment
## Steps:
### Environment Setup: 
- To see if you already have Node.js and npm installed and check the installed version, run the following commands:
```
node -v
npm -v
```
- If you don't have Node.js and npm installed, use a node version manager to install Node.js and npm. 
   #### OSX/Linux Node version manager: [nvm](https://github.com/nvm-sh/nvm), [n](https://github.com/tj/n)
   #### Windows Node version manager: [nodist](https://github.com/nullivex/nodist), [nvm-windows](https://github.com/coreybutler/nvm-windows)
   #### You can also use a Node installer: [node.js installer](https://nodejs.org/en/download/)
- Clone the repository to the local system.
- Create the .env file. The sample.env is as follows:
```
PORT = 5000
NODE_ENV = local
MONGODB_URI = mongdb_uri 
```
### Starting the App
- Run the below commands to install the dependencies and start the app. 
```
npm install
npm run start
```

## Testing
### As frontend is not implemented please use POSTman or any REST API tester to test out the APIs. 
### Postman collection link: [https://www.getpostman.com/collections/7b6baa2d124bc966167a](https://www.getpostman.com/collections/7b6baa2d124bc966167a)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7b6baa2d124bc966167a?action=collection%2Fimport)

## API Specification
- Get all order items
```
GET/ http://localhost:5000/api/v1/items
Sample Output: 
[
    {
        "_id": "627ff805a81254f3740593b4",
        "name": "item10",
        "units": 10,
        "cost": 700,
        "__v": 0
    },
    {
        "_id": "627ff9c64c3840d4cc6c3d0d",
        "name": "item11",
        "units": 10,
        "cost": 700,
        "__v": 0
    },
    {
        "_id": "627ffa4aa7cbcae376c5cef9",
        "name": "item12",
        "units": 10,
        "cost": 700,
        "__v": 0
    }
 ]
```
- Create an order item
```
POST/ http://localhost:5000/api/v1/item
Request body:
{  
  "name": "item 5",
  "units": 10,
  "cost": 700,
  "warehouse": "627fee2b586fc3270d34cb46"
}
{
    "name": "item 5",
    "warehouse": "627fee2b586fc3270d34cb46",
    "units": 10,
    "cost": 700,
    "_id": "6281dddaad7e5c4dc115fe1d",
    "__v": 0
}
```
- Delete an order item
```
DELETE/ http://localhost:5000/api/v1/item/627ff9c64c3840d4cc6c3d0d
Sample Output:
{
    "message": "item with id 627ff9c64c3840d4cc6c3d0d has been successfully deleted"
}
```
- Update an order item
```
PUT/ http://localhost:5000/api/v1/item/

Request Body:
{
   "name": "edited",
   "warehouse": "627fee2b586fc3270d34cb46",
   "units": 100,
   "cost": 70000
}
Sample Output:
{
    {
    "_id": "6281a920bcfd9e5bbb0a16d3",
    "name": "edited",
    "units": 100,
    "cost": 70000,
    "__v": 0,
    "warehouse": "627fee2b586fc3270d34cb46"
}
}
```

 
