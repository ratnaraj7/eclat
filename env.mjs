/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_GRAPHQL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GRAPHQL: process.env.NEXT_PUBLIC_GRAPHQL,
  },
});
