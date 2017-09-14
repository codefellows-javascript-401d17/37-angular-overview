'use strict';

require("./scss/reset.scss");
require("./scss/main.js");

const angular = require('angular');
const cowsay = require('cowsay-browser');

cowsayApp.controller(CowsayController, ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Welcome to the land of cows!';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.update = (input) => {
    $log.debug('cowsayCtrl.update()');
    return cowsay.say({text: input || 'FUUUUUUUUDDDGE', f: this.current});
  };

  this.speak = (input) => {
    $log.debug('cowsayCtrl.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = (input) => {
    $log.debug('cowsayCtrl.undo()');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };
}

cowsayApp.controller('NavController', ['$log', NavController]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'about',
      url: '/about-us'
    },
    {
      name: 'contact',
      url: '/contact-us'
    }
  ];
}
