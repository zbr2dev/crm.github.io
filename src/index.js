import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './components/App';

import articlesStore from './stores/articlesStore';
import ordersStore from './stores/ordersStore';
import productsStore from './stores/productsStore';
import smsStore from './stores/smsStore';
import settingsStore from './stores/settingsStore';
import ttnsStore from './stores/ttnsStore';
import npStore from './stores/npStore';
import commentsStore from './stores/commentsStore';
import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import editorStore from './stores/editorStore';
import userStore from './stores/userStore';
import profileStore from './stores/profileStore';

const stores = {
  articlesStore,
    ordersStore,
    productsStore,
    ttnsStore,
    commentsStore,
    settingsStore,
    smsStore,
    npStore,
  authStore,
  commonStore,
  editorStore,
  userStore,
  profileStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));
