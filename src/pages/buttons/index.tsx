import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ButtonEmphasis from '../../components/UI/Buttons/ButtonEphasis';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <ButtonEmphasis disabled={false} appBarColor="primary" />
  </BrowserRouter>
);