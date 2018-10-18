import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/src/jquery';
import 'bootstrap3/dist/css/bootstrap.css';
import 'bootstrap3/dist/js/bootstrap.js';
import App from './App';


//  ssh root@138.68.68.89 -i .\juices_k
// https://medium.freecodecamp.org/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48
ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
