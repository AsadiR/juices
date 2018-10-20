import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/fn/promise';
import 'core-js/fn/object/assign';
import 'core-js/fn/array/find-index';
import 'core-js/fn/regexp/replace';

import 'jquery/src/jquery';
import 'bootstrap3/dist/css/bootstrap.css';
import 'bootstrap3/dist/js/bootstrap.js';

import "./css/preloader.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/animate.css";
import "./css/simple-line-icons.css";

import App from './App';


//  ssh root@138.68.68.89 -i .\juices_k
// https://medium.freecodecamp.org/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48
ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
