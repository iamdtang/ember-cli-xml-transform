import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:xml', 'Unit | Transform | xml', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});


test('it deserializes a string of XML to an XMLDocument object', function(assert) {
  let transform = this.subject();
  let xml = '<family><cats></cats></family>';
  let deserialized = transform.deserialize(xml);
  assert.ok(deserialized instanceof window.XMLDocument);
  assert.equal(deserialized.getElementsByTagName('cats').length, 1);
});

test('it deserializes a string of XML to an XMLDocument object with a namespace', function(assert) {
  let transform = this.subject();
  let xml = '<family xmlns="http://my-site.com/xml"><cats></cats></family>';
  let deserialized = transform.deserialize(xml);
  assert.equal(deserialized.getElementsByTagName('family')[0].getAttribute('xmlns'), 'http://my-site.com/xml');
});

test('it serializes an XMLDocument object to a string', function(assert) {
  let transform = this.subject();
  let deserialized = transform.deserialize('<family><cats></cats></family>');
  let cat = deserialized.createElement('cat');
  deserialized.getElementsByTagName('cats')[0].appendChild(cat);
  assert.equal(transform.serialize(deserialized), '<family><cats><cat/></cats></family>');
});

test('it serializes an XMLDocument object to a string with a namespace', function(assert) {
  let transform = this.subject();
  let deserialized = transform.deserialize('<family xmlns="http://my-site.com/xml"><cats></cats></family>');
  let cat = deserialized.createElement('cat');
  deserialized.getElementsByTagName('cats')[0].appendChild(cat);
  assert.equal(transform.serialize(deserialized), '<family xmlns="http://my-site.com/xml"><cats><cat/></cats></family>');
});
