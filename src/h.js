import { isString } from './is-string';

/**
 * main function to create elements
 * @param {String} tag
 * @param {Object|Array} args
 */
const h = (tag, properties = {}, childs = []) => {
  if (!isString(tag)) {
    throw new Error('No valid tag given'); // tag must be a string
  }

  // create the html node
  const element = document.createElement(tag);

  // get they object keys
  const propKeys = Object.keys(properties);

  propKeys.forEach((prop) => {
    const value = properties[prop];

    typeof value === 'function'
      ? element.addEventListener('click', (e) => {
          value(element, e); // call the given function with the element and event as parameters
        })
      : element.setAttribute(prop, value);
  });

  childs.forEach((child) => {
    isString(child)
      ? element.appendChild(document.createTextNode(child))
      : element.appendChild(child);
  });

  // return the composed element
  return element;
};

export default h;
