import React from 'react';
import './index.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { render } from 'react-dom';
import { App } from './App';
import { LazyMotion, domAnimation } from 'framer-motion';
render(<LazyMotion features={domAnimation}>
    <MantineProvider>
      <App />
    </MantineProvider>
  </LazyMotion>, document.getElementById('root'));