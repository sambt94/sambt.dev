/**
 * ABOUTME: Environment variable loader with validation
 * ABOUTME: Provides type-safe access to environment variables and validation at runtime
 */

import { config } from 'dotenv-flow';
import { z } from 'zod';
import path from 'path';

// Load environment variables from .env files
config({
  path: path.resolve(process.cwd()),
  silent: process.env.NODE_ENV === 'production',
});

// Define environment schema
const envSchema = z.object({
  // Supabase
  SUPABASE_URL: z.string().url('SUPABASE_URL must be a valid URL'),
  SUPABASE_ANON_KEY: z.string().min(1, 'SUPABASE_ANON_KEY is required'),
  
  // Optional variables with defaults
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
});

// Extract and validate environment variables
export function validateEnv() {
  try {
    return envSchema.parse({
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors
        .map(err => err.path.join('.'))
        .join(', ');
      
      throw new Error(`Environment validation failed. Missing or invalid variables: ${missingVars}. Check your .env file.`);
    }
    throw error;
  }
}

/**
 * Type-safe environment variables
 */
export type Env = z.infer<typeof envSchema>;

/**
 * Get the validated environment variables
 * @throws Error if required environment variables are missing or invalid
 */
export function getEnv(): Env {
  return validateEnv();
}

// Singleton instance for reuse
let envCache: Env | null = null;

/**
 * Get the environment variables, cached after first validation
 * @throws Error if required environment variables are missing or invalid
 */
export function env(): Env {
  if (!envCache) {
    envCache = getEnv();
  }
  return envCache;
}

export default env;