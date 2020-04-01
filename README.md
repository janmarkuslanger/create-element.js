# create-element.js
A tiny library for creating an element with javascript.

- Compose your elements with javascript
- Easy to use
- Create every element you want `<my-super-div></my-super-div>`
- Written in ES6
- Works in every "modern" browser (IE9+)

## Install

` npm i create-element-lib`

## h

h(**tag** <string>, **properties** <object>, **childs** <array>)

- tag is the tag name of the element
  (h1, h2, div, span...)
- properties hold the attributes and event listener of the element
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

## Questions
For questions and support feel free to create an issue or write an email to
janmarkuslanger10121994@gmail.com

## Issues
If you found a bug, then please create an issue. It will help me a lot to make my work better. :)

## Contribution
Pull requests are always welcome. I am always happy to see others working on
my GitHub projects.

## Get in touch
Write an email to janmarkuslanger10121994@gmail.com :)
