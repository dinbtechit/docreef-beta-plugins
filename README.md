# Doctree beta plugins

A source for the Doctree extension store. The app reads `index.json`
here (it's one of the store's default sources) and installs the packages
it lists.

```
index.json                 the listing the app reads
packages/<id>-<v>.dtx.json packed script extensions
src/<id>/                  their sources: manifest.json + JS, HTML, CSS
```

To add or update one, edit `src/<id>/` (bump `version` in its
`manifest.json`), then from a Doctree checkout:

```
dart run tool/pack_extension.dart ../docreef-beta-plugins
```

and push. Built-in entries in `index.json` (`"kind": "builtin"`) are the
app's own extensions and are kept as they are.

The app reads this repository anonymously, through
raw.githubusercontent.com, so it has to be public for the store to see it.
