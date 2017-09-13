![cf](https://i.imgur.com/7v5ASc8.png) 37: Angular Overview
======

## Submission Instructions
* fork this repository & create a new branch for your work
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

## Learning Objectives
* students will be able to create a simple AngularJS application

## Requirements
#### Configuration
* `.babelrc`
* `.gitignore`
* `package.json`
  * create an npm `watch` script for running `webpack-dev-server --inline --hot`
* `webpack.config.js`

## Feature Tasks
* **Build a Simple Cowsay Application:**
* create a form and submit button that will be used to save the current state of the cow's text
  * use the `ng-submit` directive to control the form's on-submit functionality
  * add a button that uses the `ng-click` directive to populate a second `pre` tag with the current `pre` tag state
* add a button that uses the `ng-click` directive to create an **undo** effect
  * whenever this button is clicked, it should reset the second `pre` tag with the content it last showed
* add a select menu that uses the `ng-repeat` directive
  * this should be used to populate the select menu with the names of all `cowsay` files
    * hint: `cowsay.list((err, list) => {})`
* when a `cowsay` filename is selected from the menu, have the first `pre` tag use the selected cowfile
* use the `ng-show` directive to show the second `pre` tag **only** if the history state is not empty

* **Optional:**
* style your application!
