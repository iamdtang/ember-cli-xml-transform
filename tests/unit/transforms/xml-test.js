import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:xml', 'Unit | Transform | xml', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});


test('it deserializes a string of XML to an object', function(assert) {
  let transform = this.subject();
  let xml = '<family><cats></cats></family>';
  let deserialized = transform.deserialize(xml);
  assert.ok(deserialized instanceof window.XMLDocument);
  assert.equal(deserialized.getElementsByTagName('cats').length, 1);
});

test('it serializes an XML object to a string', function(assert) {
  let transform = this.subject();
  let family = document.createElement('family');
  let cats = document.createElement('cats');

  cats.appendChild(document.createElement('cat'));
  cats.appendChild(document.createElement('cat'));
  family.appendChild(cats);

  let expectedXMLString = '<family xmlns="http://www.w3.org/1999/xhtml"><cats><cat></cat><cat></cat></cats></family>';
  assert.equal(transform.serialize(family), expectedXMLString);
});
