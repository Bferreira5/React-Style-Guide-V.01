# Getting Started 
1. `nvm use`
2. `npm install -g yarn`
3. `yarn install`
4. `yarn start` **(for dev)**, `yarn prod` **(for prod)**

### Running Tests
- `yarn test` **(for a one-time run)**
- `yarn test -- --watchAll` **(to keep running tests after file changes)**

### Running the app

- `npm run start` **(to start local build)**

## Development notes from Brandon and Jesse
This project uses mobx, which is "redux without the boilerplate." While you can use ES5 and still use mobx, we've leveraged their usage of ES7 decorators. The decorators read easily, but they look different than javascript-of-old, so here are a few: 
```
@observe
@observable
@computed
@action
```
In fact, that's the _majority_ of mobx right there. 


### Tests
The tests are _also_ straightforward thanks to the fact that everything is in the stores, and it's just as simple acting on a javascript object. We use Jest for the test runner, which uses Jasmine. The test runner is looking for files in `/src/**/**.test.js`. This might seem a strange convention, but it becomes very easy to see where tests are missing, and it feels "dirty" to leave one missing. But, `--coverage` is enabled as part of `yarn test` so it will show it there as well.


# App Structure and Requirements

This react powered style guide 

## Requirements Road Map

### V.01 Requirements (Environment Local and Dev)

- [x] Style Guide should be developed and deployed using FMI preferred  environment and DevOps method. 
- [x] MVP **react/mobx/webpack** 
- [ ] ~~Style Guide should be built and structured like an existing FMI apps using a baseline tech stack (CRUD) (Possibly Node.js, Express, mongoDB, react.js,  Mobx.js for  Unit Test, with a JSX translator, (ecmaScript, babel), SCSS/less, and prism.js using preferred FMI JavaScript package managers, bundlers, and task runners, version controlled using Git Lab.)~~ 

### V.02 Requirements

- [x] The UI of the Style Guide should loosely match the prototype from design.
- [x] The Style Guide should be responsive.
- [x] The Style Guide should include representations of components but will not be 100% based off component code from production apps yet. 
	- [x] The style guide should not include every component as design has mocked because some of these have not been built in production codebases.
	- [ ] Only components currently live in production app should be referenced.

### v.03 Requirements (MVP met)

- [ ] The Style Guide should contain components built like production codebase examples.
- [ ] Style Guide Components should contain code examples.
- [ ] The Style Guide should contain static layout images and Brand graphics.


### v.04 Requirements 
- [ ] The Style Guide should have a component based system in place.
- [ ] The Style Guide should sync wit production components from production codebase to make sure UI is always up to date.

### v.05 Requirements
- [ ] Style Guide should represent new components that may not exist in FMI app suite.
- [ ] Style Guide should be easily sharable and contain reusable codebase.

## The file structure

```
styles/ 
| 
|– abstracts/ 
|   |– _function.scss    # App-wide Sass functions
|   |– _mixins.scss      # Mixin rules
|   |– _variables.scss   # Sass Variables 
| 
|– base/ 
|   |– _base.scss        # App-wide Basic styles
|   |– _fonts.scss       # all @font-face declarations
|   |– _helpers.scss     # Class & placeholders helpers  
|   |– _typography.scss  # Typography rules 
| 
|– components/ 
|   |– _buttons.scss     # Buttons 
|   |– _tile.scss        # Tiles 
|   ...                  # Etc… 
| 
|– helpers/  
|   |– _functions.scss   # Sass Functions 
|   |– _mixins.scss      # Sass Mixins 
|   |– _helpers.scss     # Class & placeholders helpers 
|   ...                  # Etc… 
| 
|– layout/ 
|   |– _grid.scss        # Grid system 
|   |– _header.scss      # Header 
|   |– _footer.scss      # Footer 
|   |– _sidebar.scss     # Sidebar 
|   |– _forms.scss       # Forms 
|   ...                  # Etc… 
| 
|– pages/ 
|   |– _home.scss        # Home specific styles 
|   |– _contact.scss     # Contact specific styles 
|   ...                  # Etc… 
| 
|– themes/ 
|   |– _theme.scss       # Default theme 
|   |– _admin.scss       # Admin theme 
|   ...                  # Etc… 
| 
|– vendors/ 
|   |– _bootstrap.scss   # Bootstrap 
|   |– _jquery-ui.scss   # jQuery UI 
|   ...                  # Etc… 
| 
| 
`– main.scss             # primary Sass file 
```

#### Abstracts

The `abstracts/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Abstracts folder](http://sass-guidelin.es/#abstracts-folder)

#### Base

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find some typographic rules, and probably a stylesheet (that I’m used to calling `_base.scss`), defining some standard styles for commonly used HTML elements.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Base folder](http://sass-guidelin.es/#base-folder)

#### Components

For small components, there is the `components/` folder. While `layout/` is macro (defining the global wireframe), `components/` is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in components/ since the whole site/application should be mostly composed of tiny modules.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Components folder](http://sass-guidelin.es/#components-folder)


#### Layout

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Layout folder](http://sass-guidelin.es/#layout-folder)


#### Pages

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

*Note — Depending on your deployment process, these files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.*

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Pages folder](http://sass-guidelin.es/#pages-folder)


#### Theme

On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a `themes/` folder.

*Note — This is very project-specific and is likely to be non-existent on many projects.*

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Themes folder](http://sass-guidelin.es/#themes-folder)

#### Vendors

Most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite. For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Vendors folder](http://sass-guidelin.es/#vendors-folder)

