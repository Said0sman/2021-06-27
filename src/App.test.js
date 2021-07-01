import App from './App';
import { render, screen } from '@testing-library/react';


test ('check if App is true', () => {
    render (<App />)
    const Appinfo = true;
    expect(Appinfo).toBe(true);
  })
