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
//# sourceMappingURL=c66f79cd5e9e2ba6f9fb7c21504d4afc76787868.js.map