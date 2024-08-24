import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App/dashboard';

it('renders dashboard', () => {
    render(<App />);
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
});
