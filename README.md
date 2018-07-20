# We Do Nothing

A basic business website template with a Webpack build system. Preview the production build [here](http://jasonbobich.com/we-do-nothing).

![](https://s3-us-west-2.amazonaws.com/themeblvd-projects/we-do-nothing/we-do-nothing.jpg)

## Quick Start

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Run `npm run start` to start the development server and watch for changes.

*Note: [Browsersync](https://browsersync.io/) will automatically find an available port and open it up in your web browser.*
s
## Project Structure

* `public/` - **Final build, for both development and production.**
    * `assets/` - All static assets, organized by filetype.
    * `*.html` - Generated, static pages of website.
* `src/` - **Project source files.**
    * `font/` - Any web font files for typography or icons.
    * `html/` - HTML template files.
        * `pages/` - An HTML file for each page, mapped from `site.config.js`.
        * `partials/` - HTML partial files included within your template.
        * `template.html` - Top-level HTML template, where pages and partials get included.
    * `img/` - Images.
    * `js/` - JavaScript files.
        * `/partials` - Any JavaScript partials.s
        * `/main.js` - Webpack entry point for compiling JavaScript and CSS.
    * `scss/` - All Sass files for styling.
        * `/partials` - All Sass partial files.
        * `main.scss` - Main Sass file where partials are included.
    * `svg/` - SVG files.
* `site.config.js` - Configuration file including website title and an object website's pages, which should match files in `/src/html/pages`.

## Project Commands

* `npm run start` - Watch for changes & continuously build into the `/public` directory.
* `npm run server` - Run the development server.
* `npm run watch` - Continuously build development files into the `/public` directory.
* `npm run build` - Build the development files once.
* `npm run build:prod` - Build the production files once.
