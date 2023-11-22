# Summary

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I chose this as a quick way to start building the feature. To start it, run:

### `npm i`

followed by

### `npm start`

## Approach

I tried to split the feature into isolated components that made sense to me. I used SASS for styling, and avoided using any external libraries, even though usage of Immer, would've been helpful to make the code responsible for updating the task listing state more compact. (see file task.jsx  L16-L20).
I'm loading the data from a file, I thought about implementing a Mock Service Worker, to emulate an API call, but decided to keep it simple. 
I forgot to bootstrap the project using a Typescript template and by the time I realised it, I had pretty much finished the implementation. 
