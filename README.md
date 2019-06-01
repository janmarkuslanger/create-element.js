# create-element.js
A tiny library for creating element with javascript.

- Compose your elements with javascript
- Easy to use
- Create every element you want `<my-super-div></my-super-div>`
- Written in ES6
- Works in every "modern" browser (IE9+)

## Install

` npm i create-element-lib`

## h

h(**tag** <string>, **properties** <object>, **childs** <array>)

- tag is the tagname of the element
  (h1, h2, div, span...)
- properties holds the attributes and event listener of the element
  `{class: 'my-class', click: () => { console.log('hello world')}}`
- childs holds the child element and text node

## Usage

``` javascript
  import { h } from 'create-element-lib';
```

## Example

``` javascript
const myEl = h('div', {click: () => {
  console.log('Hello World')
}}, ['Click me!']);

document.body.appendChild(myEl);
```
