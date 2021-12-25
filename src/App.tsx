import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/pages/Home'));
const CountryInfo = lazy(() => import('./components/pages/CountryInfo'));

const App: React.FC = () => {
  return (
    <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/country/:name" component={CountryInfo}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;
