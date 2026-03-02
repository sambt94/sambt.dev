// ABOUTME: Tests for the EmailSubscribe form component.
// ABOUTME: Verifies form rendering, submission flow via /api/subscribe, and success/error states.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EmailSubscribe } from '../email-subscribe';

// Mock global fetch
const mockFetch = vi.fn();

beforeEach(() => {
  vi.stubGlobal('fetch', mockFetch);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('EmailSubscribe', () => {
  it('renders the subscribe prompt text', () => {
    render(<EmailSubscribe />);
    expect(screen.getByText(/If you want to follow along, leave your email below/)).toBeDefined();
  });

  it('renders an email input field', () => {
    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com');
    expect(input).toBeDefined();
    expect(input.getAttribute('type')).toBe('email');
  });

  it('renders a subscribe button', () => {
    render(<EmailSubscribe />);
    expect(screen.getByText('Subscribe')).toBeDefined();
  });

  it('updates email input value on change', () => {
    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('shows success message after successful submission', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com');
    const button = screen.getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/You're in/)).toBeDefined();
    });

    expect(mockFetch).toHaveBeenCalledWith('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });
  });

  it('clears email input after successful submission', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;
    const button = screen.getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });

  it('shows error message when API returns error', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: 'Failed to subscribe' }),
    });

    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com');
    const button = screen.getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Failed to subscribe')).toBeDefined();
    });
  });

  it('shows fallback error on network failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com');
    const button = screen.getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Something went wrong. Try again?')).toBeDefined();
    });
  });

  it('has a border-t separator at the top', () => {
    const { container } = render(<EmailSubscribe />);
    const wrapper = container.firstElementChild;
    expect(wrapper?.classList.contains('border-t')).toBe(true);
  });
});
