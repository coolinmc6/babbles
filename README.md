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

## React-Router Set-up
- to add React-Router, I have to do a few things:
  - import { Router, browserHistory } from React-Router
  - import my soon-to-be-create routes.js file: `import routes from "./routes"`
  - Replace my `<App />` component with a `<Router />` between my Provider tags
  - remove my App import
  - create a routes.js file 
  - import React (from React) and { Route, IndexRoute} from React-Router
  - import App component
  - set-up my default path which points to App
- Where I first encountered a problem was that I was getting an error saying that nothing matched the '/' path.
To fix that, and this makes sense, I needed to bring in my routes file.  I may be replacing my `<App />` component
with my Router BUT it still needs two arguments: my history and my routes.  On initial set-up, because I didn't 
create my routes.js file, I hadn't thought to import it yet.  Once you build the routes.js file, for people to be
able to navigate to those paths, you have to pass them to the `<Router />` component somehow.

## Intermission
- At this point I am all set-up to start building.  Redux is set-up and my router is set-up for me to start building
new containers / components.  Overall, nothing I haven't seen or done before but it was good to do everything myself.
Next steps are to start fleshing out what the app will do and the basic look.  I'm going to bring in Bootstrap to make
it look moderately attractive.

## Header and Footer Placeholders
- The header and footer placeholders weren't too bad.  I am so used to making class-based components that I think I'm 
just going to make them...there doesn't appear to be a 'cost' in performance to do it that way.
- Here is an example of the other kind of component (I believe 'functional'):
```js
export const Footer = () => {
	return (
		<div className="footer">
			<Link to="/">All</Link>
			<Link to="/active">Active</Link>
			<Link to="/complete">Complete</Link>
		</div>
	)
}
```
- to really finish up this secion, I'd need to clean-up the links but I don't yet know what I want this thing to do
100%.
- Links: 
  - Left: Home, Notifications, me
  - Center: icon
  - Right: search, messages, settings, tweet
- Next steps:
1. create Babbles feed and create babble box
1. create ability to like a babble, delete a babble

