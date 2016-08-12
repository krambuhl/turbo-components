# turbo-components

This is repo for pulling versioned components using git.  It defines how all the components in a design system should appear and behave, using handlebars, css, and js.

## Post Clone

After pulling this repository down to your local machine, run `npm link` in the repo directory.  This will create a dependency symlink, so you can install your local repo as a dependency elsewhere using `npm link turbo-components`

## Commands

__Build__

Clean `dist` directory, then Precompiles templates, transpiles ES6 to ES5, copies css, and creates indexes for module consumption.

```
npm run build
```

__Watch__

Watches files and runs build commands when changes occur.

```
npm run watch
```

__Develop__

If you're developing, you probably want to build, then watch for file changes. _How sweet._

```
npm run develop
```