/**
 * ABOUTME: Tests for environment variable loader and validation
 * ABOUTME: Ensures the environment validation works as expected
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { validateEnv, getEnv } from '../src/env';

describe('Environment Validation', () => {
  // Store original env vars
  const originalEnv = { ...process.env };

  beforeEach(() => {
    // Clear env vars for each test
    vi.resetModules();
    process.env = { NODE_ENV: 'test' };
  });

  afterEach(() => {
    // Restore original env vars
    process.env = originalEnv;
  });

  it('should throw error when SUPABASE_URL is missing', () => {
    // Setup
    process.env.SUPABASE_ANON_KEY = 'some-key';
    
    // Test
    expect(() => validateEnv()).toThrow(/Environment validation failed/);
    expect(() => validateEnv()).toThrow(/SUPABASE_URL/);
  });

  it('should throw error when SUPABASE_ANON_KEY is missing', () => {
    // Setup
    process.env.SUPABASE_URL = 'https://example.supabase.co';
    
    // Test
    expect(() => validateEnv()).toThrow(/Environment validation failed/);
    expect(() => validateEnv()).toThrow(/SUPABASE_ANON_KEY/);
  });

  it('should throw error when SUPABASE_URL is invalid', () => {
    // Setup
    process.env.SUPABASE_URL = 'not-a-url';
    process.env.SUPABASE_ANON_KEY = 'some-key';
    
    // Test
    expect(() => validateEnv()).toThrow(/Environment validation failed/);
    expect(() => validateEnv()).toThrow(/SUPABASE_URL/);
  });

  it('should validate with all required variables', () => {
    // Setup
    process.env.SUPABASE_URL = 'https://example.supabase.co';
    process.env.SUPABASE_ANON_KEY = 'some-key';
    
    // Test
    const env = validateEnv();
    expect(env).toBeDefined();
    expect(env.SUPABASE_URL).toBe('https://example.supabase.co');
    expect(env.SUPABASE_ANON_KEY).toBe('some-key');
  });

  it('should use default values for optional variables', () => {
    // Setup
    process.env.SUPABASE_URL = 'https://example.supabase.co';
    process.env.SUPABASE_ANON_KEY = 'some-key';
    
    // Test
    const env = validateEnv();
    expect(env.NODE_ENV).toBe('test'); // from beforeEach
    expect(env.PORT).toBe(3000); // default
  });

  it('should use provided values for optional variables', () => {
    // Setup
    process.env.SUPABASE_URL = 'https://example.supabase.co';
    process.env.SUPABASE_ANON_KEY = 'some-key';
    process.env.PORT = '4000';
    
    // Test
    const env = validateEnv();
    expect(env.PORT).toBe(4000);
  });

  it('should return same values from getEnv', () => {
    // Setup
    process.env.SUPABASE_URL = 'https://example.supabase.co';
    process.env.SUPABASE_ANON_KEY = 'some-key';
    
    // Test
    const env = getEnv();
    expect(env).toBeDefined();
    expect(env.SUPABASE_URL).toBe('https://example.supabase.co');
    expect(env.SUPABASE_ANON_KEY).toBe('some-key');
  });
});