[![Build Status](https://travis-ci.org/skaterdav85/ember-cli-xml-transform.svg)](https://travis-ci.org/skaterdav85/ember-cli-xml-transform)

# ember-cli-xml-transform

A simple transform for dealing with XML strings.

## Installation

```
ember install ember-cli-xml-transform
```

## Usage

Imagine you have a model called `configuration` with a property `body`. The server returns a string of XML and expects a string of XML to be sent back. In the browser, you want to manipulate this XML using the standard DOM API. Simply use `DS.attr('xml')` as follows:

```js
// app/models/configuration
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('xml')
});
```

If the server sent back a string of XML for the `body` property, Ember will transform it into an `XMLDocument` so you can use the standard DOM API:

```js
model.get('body'); // XMLDocument
```

Modify the `XMLDocument` as necessary. When the model is sent back to the server, it will be stringified.
