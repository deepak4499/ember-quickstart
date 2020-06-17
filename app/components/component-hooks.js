import Component from '@ember/component';

export default Component.extend({
    didInitAttrs(options) {
        console.log('didInitAttrs', options);
    },
    didUpdateAttrs(options) {
        console.log('didUpdateAttrs', options);
    },
    willUpdate(options) {
        console.log('willUpdate', options);
    },
    didReceiveAttrs(options) {
        console.log('didReceiveAttrs', options);
    },
    willRender() {
        console.log('willRender');
    },
    didRender() {
        console.log('didRender');
    },
    didInsertElement() {
        console.log('didInsertElement');
    },
    didUpdate(options) {
        console.log('didUpdate', options);
    },
});
