#############################################################
# Books challenge - Pablo Caraballo
react + react context (for state management) + styled component + graphql + lodash

_live site:_ 
_https://xxx-developergit001.vercel.app/_


#############################################################

### ENVIRONMENT VARIABLES

_you can see the API_TOKEN (demo purposes only) in the file .env (in real projects, you must avoid this values on the front and in any repo)_

### INSTRUCTIONS STEPS 📋

_1 . Install the dependencies_

```
npm install
```

_2 . start the app_

```
npm run start
``` 

## General structure

_Main page_
```
    App.js (Contains the context provider, and the main components)
```
_Main components_

```
    _AppLayout: General/Generic component, its going to add always the Header component and any children that you want_

    _BookList: Show the result of the graphql books request, show each book item._

    _BookList/Item: Show each item with the Delete operation, if you click it, a modal appears to confirm the delete action._
    
    _Modal: Its a generic modal to confirm the delete process._
```
```
    libs: In this directory you can find the utilities for the app.

    libs\config.js (some tokens and variables)
    libs\context-lib.js (context hooks)
    libs\reducer-lib.js (reducer)
    libs\reducerAction-lib.js (actions)
    libs\services.js (here are the graphql calls, in a real scenario this api calls have to be in some backend)
    libs\theme.js (color schemas and some mediaqueries sizes, nothing complex)
```

## React context instead of redux

```
For this demo i use the native react context for the state management.
```

## Graphql and real endpoints calls (the delete button are "deleting" books for real, so be careful, you have some items to play with)

```
In a real scenario, the graphql calls must to be allocated on some backend server to avoid a security breach.
For the purpose of this demo i created some real books, so you can play, list, delete books and also re order.
```