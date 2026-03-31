'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'f6v1xxe3';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'powers-creative-co',
  title: 'Powers Creative Co.',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
  schema: {
    types: schemaTypes,
  },
});
