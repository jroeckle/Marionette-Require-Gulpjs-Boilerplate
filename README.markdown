Marionette, Require, and Gulp.js Boilerplate
==================================
![Example](http://sidnet.info/sites/default/files/marionette-logo.png)   ![Example](http://3.bp.blogspot.com/-JFOJ-k6tLnA/TsiKgBYPvqI/AAAAAAAAAT8/dGXeu0LeuTE/s320/backbone-js-logo.png) 
![Example](http://cache.preserve.io/9qwernji/assets/c6d7109e182d0d88cc312951d3e1d2f8.png) ![Example](http://requirejs.org/i/logo.png)

#Description
A Lightweight boilerplate originally project based off [Marionette-Require-Boilerplate](https://github.com/BoilerplateMVC/Marionette-Require-Boilerplate), with Gulp.js integration instead of Grunt.js.  

#Getting Started
   1. Download and install [Node.js](http://nodejs.org/#download)
   2. Clone this repository
   3. On the command line, type `npm install nodemon -g` to install the [nodemon](https://github.com/remy/nodemon) library globally.  If it complains about user permissions type `sudo npm install nodemon -g`.
   4.  Install [Gulp.js](https://github.com/gulpjs/gulp) globally if you have not already.  To install Gulp.js global type `npm install -g gulp` in the command line.
   5. Navigate to inside of the **Backbone-Require-Boilerplate** folder and type `npm install` to install the other npm modules.
   6. Install [Bower](http://bower.io/) in command line by typing `npm install -g bower`.
   7. Run Bower to install in command line with `bower install`.
   8. Next, type `nodemon` (this will start your Node.js web server and restart the server any time you make a file change thanks to the wonderful **nodemon** library)
   9. To view the demo page, go to `http://localhost:8001`

#TODO

- Automate asset paths with Gulp

##Change Log

`0.0.45` - May 19, 2015

- Updated bower dependencies
- Updated npm dependencies

`0.0.4` - February 19, 2015

- Removed deprecated MarionetteJS Logic
   - Removed Application Regions (now a LayoutView)
   - Removed Application addInitializer calls
- Housekeeping on LICENSE

`0.0.3` - February 18, 2015

- Updated bower dependencies
   - Officially dropped jQuery v1
- Added H5BP v5.0.0

`0.0.2` - July 24, 2014

- Updated bower dependencies (move libraries to UMD format when available)
- Added Uglifyjs to Gulp builds (not included in Gulp-RJS)
- Moved images into 'img-src', 'img' now used for builds

`0.0.1` - April 7, 2014

Initial commit.

##Contributors
[Jason Roeckle](https://github.com/jroeckle)

## License
Copyright (c) 2013 Jason Roeckle  
Licensed under the MIT license.		
