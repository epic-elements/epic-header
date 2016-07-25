'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    'use strict';

    var EpicHeader = function () {
        function EpicHeader() {
            _classCallCheck(this, EpicHeader);
        }

        _createClass(EpicHeader, [{
            key: 'beforeRegister',


            // Define behaviors with a getter.
            // get behaviors() {}

            value: function beforeRegister() {
                this.is = 'epic-header';
                this.properties = {
                    title: {
                        type: String,
                        value: 'This is the main headline',
                        notify: true
                    },
                    animated: {
                        type: Boolean,
                        value: false
                    },
                    elevation: {
                        type: Number,
                        value: 0
                    }
                };
                this.observers = [];
                this.listeners = {};
            }
            // Define other lifecycle methods as you need.

        }, {
            key: 'ready',
            value: function ready() {
                // console.log(this.$.textNodeContent);
            }
        }, {
            key: 'attached',
            value: function attached() {
                // this.Nodes = Polymer.dom(this.$.lightDom).getDistributedNodes();
            }
        }, {
            key: 'detached',
            value: function detached() {}
        }, {
            key: 'attributeChanged',
            value: function attributeChanged() {}
        }]);

        return EpicHeader;
    }();

    // Register the element using Polymer's constructor.


    Polymer(EpicHeader);
})();
