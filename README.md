# vue-cal

A calendar app built with Vue.

## Overview

* A [Vue](http://vuejs.org/) calendar application.
* Uses [vue-resource](https://github.com/vuejs/vue-resource) to send RESTful HTTP requests towards [Express](http://expressjs.com/) server, simulating CRUD operations on calendar events.
* Uses [Webpack](https://webpack.github.io/) to bundle Vue files and JavaScript.

**UPDATED:**

* Uses [vue-router](https://github.com/vuejs/vue-router) to make it a SPA.

## Usage

1. Run `npm install` for dependencies.
2. Run `npm run build` for Webpack bundling and live watching.
3. Visit [http://localhost:3000/](http://localhost:3000/).

## Todos

- [ ] Preserving events in `localStorage`.
- [x] SPA routing via [vue-router](https://github.com/vuejs/vue-router).
- [ ] Routing to each event's editing page and detail page via vue-router.