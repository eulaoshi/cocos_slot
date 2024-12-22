System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, resources, instantiate, Prefab, tween, SlotPicturesEnum, GameService, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSlotPicturesEnum(extras) {
    _reporterNs.report("SlotPicturesEnum", "../../utils/SlotPicturesEnum", _context.meta, extras);
  }

  _export("GameService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      SlotPicturesEnum = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2bcfayY3IVEw57zD+dXM0mN", "GameService", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Layout', 'Vec3', 'resources', 'instantiate', 'Prefab', 'tween']);

      _export("GameService", GameService = class GameService {
        getPicturePath(pictureNumber) {
          return (_crd && SlotPicturesEnum === void 0 ? (_reportPossibleCrUseOfSlotPicturesEnum({
            error: Error()
          }), SlotPicturesEnum) : SlotPicturesEnum)[pictureNumber];
        }

        checkResult(layer1, layer2, layer3) {
          var layer1Result = layer1.findLast(item => {
            return item;
          });
          var layer2Result = layer2.findLast(item => {
            return item;
          });
          var layer3Result = layer3.findLast(item => {
            return item;
          });

          if (layer1Result.name === layer2Result.name && layer1Result.name === layer3Result.name) {
            return true;
          } else {
            return false;
          }
        }

        removeChilds(layout, pictureArray) {
          var lastNode = pictureArray.findLast(item => {
            return item;
          });

          for (var node of pictureArray) {
            if (node !== lastNode) {
              layout.node.removeChild(node);
            }
          }

          pictureArray.splice(0, pictureArray.length - 1);
        }

        resetLayout(layout) {
          layout.node.setPosition(new Vec3(0, 0, 0));
        }

        rollPicture(layout, picutreArray) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            var _loop = function* _loop() {
              var num = Math.floor(Math.random() * 2 + 1);
              var promise = new Promise((resolve, reject) => {
                resources.load("prefabs/" + _this.getPicturePath(num), Prefab, (err, prefab) => {
                  if (err) {
                    reject(err);
                  } else {
                    var newNode = instantiate(prefab);
                    resolve(newNode);
                  }
                });
              });
              promises.push(promise);
            };

            for (var i = 0; i < 20; i++) {
              yield* _loop();
            }

            var nodes = yield Promise.all(promises); // 打乱顺序

            var shuffledNodes = nodes.sort(() => Math.random() - 0.5); // 插入到布局和数组中

            shuffledNodes.forEach((node, index) => {
              picutreArray.push(node);
              layout.node.insertChild(node, index + 1);
            });
          })();
        }

        tweenPictures(layout) {
          return new Promise(resolve => {
            // 开始 layout 的缓动
            var layoutX = layout.node.getPosition().x;
            tween(layout.node).to(4, {
              position: new Vec3(layoutX, 850 * 20, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              resolve(true);
            }).start();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20cb15e2de023db716d6f0a3bcc414c9c162ffdf.js.map