import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from 'components/Products';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

const App = () => {
  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Switch>
            <Products exact path="/products" />
            <Route path="*" status={404} />
          </Switch>
        </Router>
      </StyletronProvider>
    </>
  );
};

export default App;
