[![Build Status](https://travis-ci.org/skaterdav85/ember-cli-xml-transform.svg)](https://travis-ci.org/skaterdav85/ember-cli-xml-transform)

# ember-cli-xml-transform

A simple transform for dealing with XML strings

## Installation

```
ember install ember-cli-xml-transform
```

## Usage

Imagine we have a model called `configuration` with a property `body`. The server returns a string of XML and expects a string of XML to be sent across. In your app, you want this converted to an `XMLDocument` object. Simply use `DS.attr('xml')` as follows:

```js
// app/models/configuration
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('xml')
});
```

Now when you get the `body` property off the model, it will return and `XMLDocument`:

```js
model.get('body'); // XMLDocument
```

When you save the model, `body` will be an XML string.
