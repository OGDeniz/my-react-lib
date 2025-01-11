import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ButtonEmphasis from '../../components/UI/Buttons/ButtonEphasis';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <ButtonEmphasis disabled={false} appBarColor="primary" />
        </BrowserRouter>
    </React.StrictMode>
);
 