cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoadSubpackageCallback (err) {
        if (err) {
            console.error(err);
            return;
        }
    },

    loadSubpackage1 () {
        cc.loader.downloader.loadSubpackage('First', this.onLoadSubpackageCallback.bind(this));
    },

    loadSubpackage2 () {
        cc.loader.downloader.loadSubpackage('Second', this.onLoadSubpackageCallback.bind(this));
    },

    goSubpackage1 () {
        cc.director.loadScene('sub-first', (err) => {
            if (err) {
                console.log("goSubpackage1 error==>");
            }
        });
    },

    goSubpackage2 () {
        cc.director.loadScene('sub-second', (err) => {
            if (err) {
                console.log("goSubpackage2 error==>");
            }
        });
    },

});
