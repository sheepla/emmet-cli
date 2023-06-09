# emmet-cli

**emmet-cli** is a command line tool to expand [Emmet](https://emmet.io)
expression.

## Usage

```
$ emmet-cli --help
  Usage:   emmet-cli <expr>
  Version: v0.0.1

  Description:

    A simple command to expand Emmet expression

  Options:

    -h, --help        - Show this help.
    -V, --version     - Show the version number for this program.
    -s, --stylesheet  - Stylesheet mode
```

## Examples

To expand the expression, just specify the expression in first argument.

```
$ emmet-cli "!>ul#nav>li.item$*4>a{Item $}"
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
</head>
<body>
        <ul id="nav">
                <li class="item1"><a href="">Item 1</a></li>
                <li class="item2"><a href="">Item 2</a></li>
                <li class="item3"><a href="">Item 3</a></li>
                <li class="item4"><a href="">Item 4</a></li>
        </ul>
</body>
</html>
```

_NOTE_: In zsh, the `!` symbol will be expanded, so write `\!` instead.

To output as a stylesheet instead of a markup document, run with the `-s`,
`--stylesheet` option.

```
$ emmet-cli -s "bd1-s#f.5"
```

```css
border: 1px solid rgba(255, 255, 255, 0.5);
```

## Installation

Requires [Deno](https://deno.land) >= v1.25, testing on v1.33.3.

```
deno install --name emmet-cli --force https://raw.githubusercontent.com/sheepla/emmet-cli/master/cli.ts
```

## TODO

- [ ] Make it possible to specify indentation etc. with command line options
- [ ] Add a user snippet from a config file and make it configureable
- [ ] Distribute pre-compiled binaries from GitHub release page

## License

MIT

## Contributing

Welcome any contributing such as adding features, typo fixing, etc.

## c.f.

- [Emmet](https://emmet.io)
- [Emmet repo](https://github.com/emmetio/emmet)
- [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/)
- [Deno - Using Node and npm modules](https://deno.com/manual@v1.33.3/node#node-and-npm-modules)
