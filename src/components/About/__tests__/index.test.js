import React from 'react';
import About from '..';

import {render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('About component', () => {
    // First Test The first test will be the baseline to verify that the component is rendering.
  it('renders', () => {
    render(<About />);

    
  });
  
    // Second Test

    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
      
    });
    
  })

  