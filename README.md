# README

This is **Babbles**, a cheesy Twitter clone using React, Redux, React-Router, Axios, Redux-Promise and any other
popular React-related libraries that I could think of.

Here are the basic steps:
1. clean-up initial set-up and put files / directories where I want them
1. Add Redux and connect it to everything
1. Add React-Router
1. Make placeholders for Header and Footer
1. Create babbles feed and babble-box
1. Create 'like' ability

## Clean-up
- This was not anything too difficult as most of it was just moving things around and eliminating the boilerplate stuff.

## Adding Redux
- Adding Redux is largely just two files: my `./reducers/index.js` and `./index.js` files.  My reducers file is just
the rootReducer which I filled in with default state `state: (state = {}) => state` while my `./index.js` file required
a number of parts.
  - import the files / libraries I need:
  ```js
  import { Provider } from 'react-redux'
  import ReduxPromise from 'redux-promise';
  import { createStore, applyMiddleware } from 'redux';
  import reducers from './reducers';
  ```
  - create my store
  ```js
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  ```
  - Wrap my `<App />` in the `<Provider>` tags AND pass in my store as the argument for createStore 
  ```js
  ReactDOM.render(
  	<Provider store={createStoreWithMiddleware(reducers)}>
    		<App />
    	</Provider>,
    document.getElementById('root')
  );
  ```
- Nothing new yet but I did notice that adding the default state key in my rootReducer removes the error I get
for passing a valid reducer.

