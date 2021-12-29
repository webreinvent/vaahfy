# vaahfy
Customizable SCSS of Bulma &amp; Buefy

Entire theme can be customized by simply edited variables in following file:

```shell
customize/variables
```

You should compile 2 files:
1. `build.scss`: this will compile base css of bulma and buefy.
2. `style.scss`: custom scss must be written in this file, this is for project specific style.

It is recommended to import/include `vaahcss` helper css classes:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vaahcss@latest/css/vaahcss.min.css" />
```

```css
https://cdn.jsdelivr.net/npm/vaahcss@latest/css/vaahcss.min.css
```

### How to upgrade `buefy` or `bulma`?

- Download the latest version of `scss` and put it in specific folder.
- Import `@import "../../customize/variables";` in all the `scss` files after the variables.
- Copy all the variables of all the file and put it in the `customize/variables`.
- Update the path in `build.scss` and `style.scss` files.
- Run `npm install` and then `npm run dev` or `npm run prod`


- https://jenil.github.io/bulmaswatch/ - For themes