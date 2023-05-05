import React from 'react';
import { render } from '@testing-library/react';
import FooterComponent from '../components/footerComponent/index';
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

describe('FooterComponent Tests', () => {
  it('is render component', () => {
    render(<FooterComponent />, container);
    expect(container).toBeInTheDocument();
  });

  it('is render string in the component', () => {
    render(<FooterComponent />, container);
    expect(container).toBeInTheDocument('Wilian Krinke')
  });
  
});
