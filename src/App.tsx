import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Home = lazy(()=> import('./containers/Home'));
const Overview = lazy(()=> import('./containers/Overview'));
const PageNotFound = lazy(()=> import('./components/404'));

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/theme/theme.css';

export class App extends React.Component<any, {}> {
    render() {
        return(
            <Router>
                <Suspense fallback={<div>Hello There</div>}>
                    <Switch>
                        <Route exact path='/' component={() => <Home />} />
                        <Route exact path='/overview' component={() => <Overview />} />
                        <Route exact path='/pageNotFound' component={() => <PageNotFound />} />
                        <Route exact path='/*' component={() => <PageNotFound />} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;