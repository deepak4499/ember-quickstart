import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
    normalize(typeHash, hash) {
        hash['songCount'] = hash['song_count']
        delete hash['song_count']
        return this._super(typeHash, hash);
    }
});
