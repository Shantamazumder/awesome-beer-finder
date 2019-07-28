import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Layout} from './module/Layout';
import {Home} from './module/Home';
import {Fav} from './module/Fav'

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Layout/>
                    <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route exact path ="/Fav/" component={Fav}/>
                        <Route render= {() => <p>Page Not Found!!</p>}/>
                    </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
