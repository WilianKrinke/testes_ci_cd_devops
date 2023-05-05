import React from 'react';
import { render } from '@testing-library/react';
import HeaderComponent from '../components/headerComponent/index';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('HeaderComponent Tests', () => {
  it('is render component', () => {
    render(<HeaderComponent title={'Test String Header'}/>, container);
    expect(container).toBeInTheDocument();
  });

  it('is render title in the component', () => {
    render(<HeaderComponent title={'Test String Header'}/>, container);
    expect('Test String Header').toMatch(/Test String Header/)
  });
  
});
