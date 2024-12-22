System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, resources, instantiate, Prefab, tween, SlotPicturesEnum, GameService, _crd;

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
        constructor() {
          this.pictureHeight = 450;
        }

        getPicturePath(pictureNumber) {
          return (_crd && SlotPicturesEnum === void 0 ? (_reportPossibleCrUseOfSlotPicturesEnum({
            error: Error()
          }), SlotPicturesEnum) : SlotPicturesEnum)[pictureNumber];
        }

        checkResult(layer1, layer2, layer3) {
          let layer1Result = layer1.findLast(item => {
            return item;
          });
          let layer2Result = layer2.findLast(item => {
            return item;
          });
          let layer3Result = layer3.findLast(item => {
            return item;
          });

          if (layer1Result.name === layer2Result.name && layer1Result.name === layer3Result.name) {
            return true;
          } else {
            return false;
          }
        }

        removeChilds(layout, pictureArray) {
          let lastNode = pictureArray.findLast(item => {
            return item;
          });

          for (let node of pictureArray) {
            if (node !== lastNode) {
              layout.node.removeChild(node);
            }
          }

          pictureArray.splice(0, pictureArray.length - 1);
        }

        resetLayout(layout) {
          layout.node.setPosition(new Vec3(0, 0, 0));
        }

        async rollPicture(layout, picutreArray) {
          const promises = [];

          for (let i = 0; i < 20; i++) {
            const num = Math.floor(Math.random() * 2 + 1);
            const promise = new Promise((resolve, reject) => {
              resources.load(`prefabs/${this.getPicturePath(num)}`, Prefab, (err, prefab) => {
                if (err) {
                  reject(err);
                } else {
                  const newNode = instantiate(prefab);
                  resolve(newNode);
                }
              });
            });
            promises.push(promise);
          }

          const nodes = await Promise.all(promises);
          const shuffledNodes = nodes.sort(() => Math.random() - 0.5);
          shuffledNodes.forEach((node, index) => {
            picutreArray.push(node);
            layout.node.insertChild(node, index + 1);
          });
        }

        tweenPictures(layout) {
          return new Promise(resolve => {
            tween(layout.node).to(4, {
              position: new Vec3(0, this.pictureHeight * 20, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              resolve(true);
            }).start();
          });
        }

        initGame(layout1, layout2, layout3, layer1Pics, layer2Pics, layer3Pics) {
          resources.load(`prefabs/${this.getPicturePath(1)}`, Prefab, (err, prefab) => {
            const newNode1 = instantiate(prefab);
            const newNode2 = instantiate(prefab);
            const newNode3 = instantiate(prefab);
            layer1Pics.push(newNode1);
            layer2Pics.push(newNode2);
            layer3Pics.push(newNode3);
            layout1.node.addChild(newNode1);
            layout2.node.addChild(newNode2);
            layout3.node.addChild(newNode3);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=205daa0e5ebd1808258605f603ade351db7b3c96.js.map