# create-element.js

Super tiny h library.

## Install
`npm i create-element-lib --save`

## Usage

``` javascript

const myElement = h(
    'div', {
        id: 'foo',
    }, 
    'bar'
    h('p', { click: (event, clickedElement) => {
        console.log('foo');
    }}, 'Click me')
);

// -> <div id="foo"><p>Click me</p></div>
// click on <p>
// console: foo

```

