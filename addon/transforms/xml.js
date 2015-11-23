import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return Ember.$.parseXML(serialized);
  },

  serialize: function(deserialized) {
    var serializer = new XMLSerializer();
    return serializer.serializeToString(deserialized);
  }
});
