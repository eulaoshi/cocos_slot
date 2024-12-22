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
          let lastPlayTime = 0;
          return (...args) => {
            let nowTime = Date.now();

            if (nowTime - lastPlayTime >= delay) {
              fun(...args);
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
//# sourceMappingURL=ef8b7fc0216763532135b4bd5fa3fcfad83ace18.js.map