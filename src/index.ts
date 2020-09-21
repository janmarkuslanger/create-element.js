type propertiesType = {
  [key: string]: Function | string;
};

const h = (
  tag: string,
  properties: propertiesType = {},
  ...childs: Array<string | HTMLElement>
): HTMLElement => {
  if (!tag) {
    throw new Error('No tag given');
  }

  const element = document.createElement(tag);

  Object.keys(properties).forEach(propertyName => {
    const propertyValue = properties[propertyName];

    if (typeof propertyValue === 'function') {
      element.addEventListener(propertyName, e => {
        propertyValue(e, element);
      });
    } else {
      element.setAttribute(propertyName, propertyValue);
    }
  });

  childs.forEach(child => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    } else if (child) {
      element.appendChild(child);
    }
  });

  return element;
};

const VERSION = '1.0.0';

export { h, VERSION };
