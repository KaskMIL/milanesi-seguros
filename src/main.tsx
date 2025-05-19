import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './features/layout/Layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <Layout />
    </MantineProvider>
  </StrictMode>,
)
