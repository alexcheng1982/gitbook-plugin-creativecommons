# gitbook-plugin-creativecommons

This Gitbook plugin displays [Creative Commons license](https://creativecommons.org/choose/) badge and link for your book.

## Install

Add following to `book.json`.

```
{
  "plugins": ["creativecommons"]
}
```

## Usage

```
{% creativecommons type="by-nc-nd" %}
{% endcreativecommons %}
```

### Configurations

* `type` - license type, possible values: `by` (default), `by-nd`, `by-sa`, `by-nc`, `by-nc-nd`, `by-nc-sa`.
* `iconSize` - icon size, possible values: `normal` (default), `compact`.
* `iconOnly` - display icon only, possible values: any string. Setting to `true` will hide text and display only the icon.