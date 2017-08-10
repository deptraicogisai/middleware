import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import {PostDetail} from "./component/PostDetail";
import {Home} from "./home";

import {PhotoComponent} from "./component/PhotoComponent";
import store from "./store/store";
import {Provider} from 'react-redux';
import PostComponent from "./component/PostComponent";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Home} name="Home">
                <IndexRoute component={PostComponent} name="Posts"/>
                <Route path='/photos' component={PhotoComponent} name="Photos"/>
                <Route path='/detail/:id' component={PostDetail} name="Detail"/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('example')

);