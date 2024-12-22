System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FunctionUtils, _crd;

  _export("FunctionUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a697eLYpYFO87eesqcU2QP6", "FunctionUtils", undefined);

      _export("FunctionUtils", FunctionUtils = class FunctionUtils {
        /**
         * 節流
         * @param fun 
         * @param delay 
         * @returns 
         */
        throttle(fun, delay) {
          var lastPlayTime = 0;
          return function () {
            var nowTime = Date.now();

            if (nowTime - lastPlayTime >= delay) {
              fun(...arguments);
              lastPlayTime = nowTime;
            }
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bffa80182256d2e082cfb0e864fc741c36b7679.js.map