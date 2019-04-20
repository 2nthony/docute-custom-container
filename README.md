# docute-custom-container

🔍Docute plugin vuepress custom container

> This is just an `IT-JUST-WORKS` plugin!  
> CAN NOT be NESTED!

[![NPM version](https://badgen.net/npm/v/docute-custom-container)](https://npmjs.com/package/docute-custom-container)
[![NPM download](https://badgen.net/npm/dm/docute-custom-container)](https://npmjs.com/package/docute-custom-container)
[![License](https://badgen.net/npm/license/docute-custom-container)](./LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![$donate](https://badgen.net/badge/$/donate/f2a)](https://patreon.com/evillt)

### Checkout the [live demo](https://docute-custom-container.now.sh)

## Usage

Load javascript and css

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/docute-custom-container/dist/index.min.css"
/>

<script src="https://unpkg.com/docute@4"></script>
<script src="https://unpkg.com/docute-custom-container"></script>
<script>
  new Docute({
    ...
    plugins: [
      docuteCustomContainer()
    ]
  })
</script>
```

In your markdown file

```markdown
# Docute custom container

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

## Use With Bundlers

```console
yarn add docute-custom-container
```

### Webpack

In your entry file

```js
import Docute from 'docute'
import customContainer from 'docute-custom-container'

new Docute({
  ...
  plugins: [
    customContainer()
  ]
})
```

## API

`docuteCustomContainer(options: Options)`

### defaultTitle

- Type: `boolean`
- Default: `false`

Show the default title when you unspecified customize title.

### registerContainer

- Type: `Array<string>`
- Default: `[]`

Register others custom block.

```html
<style>
  .greet {
    color: #2a7;
    background-color: #58a;
  }
</style>

<script>
  new Docute({
    // ...
    plugins: [
      docuteCustomContainer({
        registerContainer: ['greet']
      })
    ]
  })
</script>
```

Then you can use the new container in markdown file

```markdown
::: greet
greeter!
:::
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**docute-custom-container** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/docute-custom-container/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
