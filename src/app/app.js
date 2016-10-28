import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import Main from './Main'; // Our custom react component
import Rec from './Rec'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render( <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Rec}/>
                <Route path="/rec" component={Rec}/>
            </Route>
        </Router>, 
document.getElementById('app'));
