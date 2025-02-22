import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from '../../app/page';

describe.skip('Home page test', () => {
  test('Home', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
  });

  test('Link to About page exists and has correct href', () => {
    render(<Home />);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', '/about');
  });
});
