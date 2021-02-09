import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Algolia} from './serarch/Algolia';

ReactDOM.render(
  <StrictMode>
    <Algolia />
  </StrictMode>,
  document.getElementById('rootik')
);
