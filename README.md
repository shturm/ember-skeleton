ember-skeleton
==============

Ember.js skeleton application using Coffeescript, Bootstrap 3, Qunit and Karma.


## Running

Distributes with a working build - open `dist/index.html`. If you make changes run:

```
npm install 
```

```
grunt
```

## Folder structure

* **`app/`** - Coffee script source. Will compile recursively to `dist/js/app/*.js` for each file recursively. You can organize your files in whatever structure makes sense to you, they will all be included. E.g. `app/controllers/`, `app/routes/`, etc.
* **`less/`** - LESS code. Will compile into single `dist/css/style.css`
* **`templates/`** Handlebars templates. Will compile into single `dist/js/templates.js` for all Handlebars files
* **`tests/`** QUnit tests and setup in Coffee script. Not included in distribution.
* **`dist/`** Contains your built application. It is not tracked by git, but included to show how output looks.


## Testing

**Testing is currently broken. Await fixes soon**


## License

### The MIT License (MIT)

Copyright (c) 2014 Alexander Georgiev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.