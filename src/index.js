import { isString } from './is-string';

/**
 * main function to create elements
 * @param {String} tag
 * @param {Object|Array} args
 */
export const h = (tag, ...args) => {
  if (!isString(tag)) {
    throw new Error('No valid tag given')
  }

  const element = document.createElement(tag);

  return element;
};
