const h = require('../dist/index').default;

afterEach(() => {
  // clear dom
  document.body.innerHTML = '';
});

describe('empty element', () => {
  it('should create an empty p tag in the body', () => {
    const element = h('p');
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p></p>');
  });
});

describe('element with property', () => {
  it('should create an empty p tag in the body with id = foo', () => {
    const element = h('p', {
      id: 'foo',
    });
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p id="foo"></p>');
  });
});

describe('element with multiple property', () => {
  it('should create an empty p tag in the body with id = foo and class = bar', () => {
    const element = h('p', {
      id: 'foo',
      class: 'bar',
    });
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p id="foo" class="bar"></p>');
  });
});

describe('element with event listener', () => {
  it('should create an empty p tag in the body with a click event tht inserts text into the element', () => {
    const element = h('p', {
      click: function(e, el) {
        el.textContent = 'foo';
      },
    });
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p></p>');
    element.click();
    expect(document.body.innerHTML).toBe('<p>foo</p>');
  });
});

describe('element with event listener and properties', () => {
  it('should create an empty p tag in the body with a click event and id = foo and class = bar', () => {
    const element = h('p', {
      id: 'foo',
      class: 'bar',
      click: function(e, el) {
        el.textContent = 'foo';
      },
    });
    document.body.appendChild(element);
    element.click();
    expect(document.body.innerHTML).toBe('<p id="foo" class="bar">foo</p>');
  });
});

describe('element with text', () => {
  it('should create a p element with foo as textContent', () => {
    const element = h('p', {}, 'foo');
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p>foo</p>');
  });
});

describe('element with multiple text', () => {
  it('should create a p element with foo bar as textContent', () => {
    const element = h('p', {}, 'foo', ' bar');
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p>foo bar</p>');
  });
});

describe('element with element', () => {
  it('should create an empty p element with another one', () => {
    const element = h('p', {}, h('p'));
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe('<p><p></p></p>');
  });
});

describe('complex element', () => {
  it('should create an element with properties and elements', () => {
    const h2 = h('h2', {
      click: function(e, el) {
        el.textContent = 'foo bar';
      },
    });

    const element = h(
      'div',
      {
        id: 'foo',
      },
      h('h1', { class: 'bar' }, 'Hello World', h('p')),
      h2
    );
    document.body.appendChild(element);
    expect(document.body.innerHTML).toBe(
      '<div id="foo"><h1 class="bar">Hello World<p></p></h1><h2></h2></div>'
    );
    h2.click();
    expect(document.body.innerHTML).toBe(
      '<div id="foo"><h1 class="bar">Hello World<p></p></h1><h2>foo bar</h2></div>'
    );
  });
});
