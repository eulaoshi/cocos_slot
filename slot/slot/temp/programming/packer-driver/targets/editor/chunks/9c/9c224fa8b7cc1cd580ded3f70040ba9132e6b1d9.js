System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, resources, instantiate, Prefab, tween, Label, SlotPicturesEnum, GameService, _crd;

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      SlotPicturesEnum = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2bcfayY3IVEw57zD+dXM0mN", "GameService", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Layout', 'Vec3', 'resources', 'instantiate', 'Prefab', 'tween', 'Label']);

      _export("GameService", GameService = class GameService {
        constructor() {
          this.pictureHeight = 450;
          this.bingoTime = 0;
          this.layer1Pics = [];
          this.layer2Pics = [];
          this.layer3Pics = [];
        }

        /**
         * 遊戲初始化
         * @param layout1 
         * @param layout2 
         * @param layout3 
         */
        initGame(layout1, layout2, layout3) {
          this.layer1Pics.push(layout1.node.getChildByName("SLOT_Picture1"));
          this.layer2Pics.push(layout2.node.getChildByName("SLOT_Picture1"));
          this.layer3Pics.push(layout3.node.getChildByName("SLOT_Picture1"));
        }
        /**
         * 重製遊戲的layer位置以及保存picture的陣列
         * @param layout1 
         * @param layout2 
         * @param layout3 
         */


        resetGameProperty(layout1, layout2, layout3) {
          this.removeLayersChildren(layout1, layout2, layout3, this.layer1Pics, this.layer2Pics, this.layer3Pics);
          this.resetLayers(layout1, layout2, layout3);
        }
        /**
         * 開始滾動
         * @param bingoNode 
         * @param audioManager 
         * @param layout1 
         * @param layout2 
         * @param layout3 
         */


        async startRolling(bingoNode, audioManager, layout1, layout2, layout3) {
          audioManager.playRollingMusic();
          await this.generateAllPictureRoll(layout1, layout2, layout3, this.layer1Pics, this.layer2Pics, this.layer3Pics);
          this.tweenAllLayerPicture(layout1, layout2, layout3).then(() => {
            if (this.checkResult(this.layer1Pics, this.layer2Pics, this.layer3Pics)) {
              bingoNode.active = true;
              audioManager.playBingoMusic();
              bingoNode.getChildByName('Score').getComponent(Label).string = (++this.bingoTime * 100).toString();
            }
          });
        }
        /**
         * 取得圖片路徑
         * @param pictureNumber 
         * @returns 
         */


        getPicturePath(pictureNumber) {
          return (_crd && SlotPicturesEnum === void 0 ? (_reportPossibleCrUseOfSlotPicturesEnum({
            error: Error()
          }), SlotPicturesEnum) : SlotPicturesEnum)[pictureNumber];
        }
        /**
         * 確認是否中獎
         * @param layer1 
         * @param layer2 
         * @param layer3 
         * @returns 
         */


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
        /**
         * 滾動結束後移除全部layer子節點
         * @param layout1 
         * @param layout2 
         * @param layout3 
         */


        removeLayersChildren(layout1, layout2, layout3) {
          this.removeChilds(layout1, this.layer1Pics);
          this.removeChilds(layout2, this.layer2Pics);
          this.removeChilds(layout3, this.layer3Pics);
        }
        /**
         * 滾動結束後移除layer子節點，但保留最後一個
         * @param layout 
         * @param pictureArray 
         */


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
        /**
         * 重製全部layer位置
         * @param layout1 
         * @param layout2 
         * @param layout3 
         */


        resetLayers(layout1, layout2, layout3) {
          this.resetLayout(layout1);
          this.resetLayout(layout2);
          this.resetLayout(layout3);
        }
        /**
         * 重製layer位置
         * @param layout 
         */


        resetLayout(layout) {
          layout.node.setPosition(new Vec3(0, 0, 0));
        }
        /**
         * 生成三個layer的滾動圖
         * @param layout1 
         * @param layout2 
         * @param layout3 
         */


        async generateAllPictureRoll(layout1, layout2, layout3) {
          await this.generatePictureRoll(layout1, this.layer1Pics);
          await this.generatePictureRoll(layout2, this.layer2Pics);
          await this.generatePictureRoll(layout3, this.layer3Pics);
        }
        /**
         * 生成單個layer的滾動圖
         * @param layout 
         * @param picutreArray 
         */


        async generatePictureRoll(layout, picutreArray) {
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
        /**
         * 所有layer開啟緩動滾動
         * @param layout1 
         * @param layout2 
         * @param layout3 
         * @returns 
         */


        tweenAllLayerPicture(layout1, layout2, layout3) {
          return Promise.all([this.tweenPictures(layout1), this.tweenPictures(layout2), this.tweenPictures(layout3)]);
        }
        /**
         * 滾動layer的圖
         * @param layout 
         * @returns 
         */


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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c224fa8b7cc1cd580ded3f70040ba9132e6b1d9.js.map