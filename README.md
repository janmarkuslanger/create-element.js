# create-element.js
A tiny library for creating element with javascript.

## Why?
- Super fast rendering
- Easy to use
- Well tested with Jest
- Create every "custom element" you want `<my-super-div></my-super-div>`
- Modern Code (ES6)
- Works in every browser (IE9+)

## Install

``` javascript
  import { h } from 'create-element';
```

## h

h(**tag** <string>, **properties** <object>, **childs** <array>)

- tag is the tagname of the element
  (h1, h2, div, span...)
- properties holds the attributes and event listener of the element
  `{class: 'my-class', click: () => { console.log('hello world')}}`
- childs holds the child element and text node

## Usage

``` javascript
const myEl = h('div', {click: () => {
  console.log('Hello World')
}}, ['Click me!']);

document.body.appendChild(myEl);
```
