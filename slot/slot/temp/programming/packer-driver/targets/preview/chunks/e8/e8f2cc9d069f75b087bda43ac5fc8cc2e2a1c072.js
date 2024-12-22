System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SlotPicturesEnum, RollingPictureService, _crd;

  function _reportPossibleCrUseOfSlotPicturesEnum(extras) {
    _reporterNs.report("SlotPicturesEnum", "../../utils/SlotPicturesEnum", _context.meta, extras);
  }

  _export("RollingPictureService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SlotPicturesEnum = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddeacW9todNbaeKZrP/rVW1", "RollingPictureService", undefined);

      _export("RollingPictureService", RollingPictureService = class RollingPictureService {
        static getPicturePath(pictureNumber) {
          return (_crd && SlotPicturesEnum === void 0 ? (_reportPossibleCrUseOfSlotPicturesEnum({
            error: Error()
          }), SlotPicturesEnum) : SlotPicturesEnum)[pictureNumber];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8f2cc9d069f75b087bda43ac5fc8cc2e2a1c072.js.map