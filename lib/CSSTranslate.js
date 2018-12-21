'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (position, axis, rtlEnabled) {
    if (typeof position === 'string') {
        position = axis === 'horizontal' && rtlEnabled === true ? position.replace(/\-/g, "") : position;
    }
    var positionCss = axis === 'horizontal' ? [position, 0, 0] : [0, position, 0];
    var transitionProp = 'translate3d';

    var translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};