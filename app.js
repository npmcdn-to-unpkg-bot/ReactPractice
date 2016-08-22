
var React = require('react');

//ReactDOM --> JS library that contains React-specific methods that deal with the DOM.
var ReactDOM = require('react-dom');

// .render is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM.
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));