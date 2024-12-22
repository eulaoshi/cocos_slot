System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Layout, Node, Prefab, resources, tween, Vec3, Animation, Label, MusicController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMusicController(extras) {
    _reporterNs.report("MusicController", "./MusicController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      MusicController = _unresolved_2.MusicController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd312ROXbBI1bOQaEIXdII0", "GameController-001", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Layout', 'Node', 'Prefab', 'resources', 'SpriteFrame', 'tween', 'Vec2', 'Vec3', 'Animation', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: Layout
      }), _dec3 = property({
        type: Layout
      }), _dec4 = property({
        type: Layout
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: _crd && MusicController === void 0 ? (_reportPossibleCrUseOfMusicController({
          error: Error()
        }), MusicController) : MusicController
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "layout1", _descriptor, this);

          _initializerDefineProperty(this, "layout2", _descriptor2, this);

          _initializerDefineProperty(this, "layout3", _descriptor3, this);

          _initializerDefineProperty(this, "handleBar1", _descriptor4, this);

          _initializerDefineProperty(this, "audioManager", _descriptor5, this);

          _initializerDefineProperty(this, "bingoNode", _descriptor6, this);

          this.layer1Pics = [];
          this.layer2Pics = [];
          this.layer3Pics = [];
          this.bingoTime = 0;
          this.throttledStartGame = void 0;
        }

        start() {
          this.throttledStartGame = this.throttle(this.startGame.bind(this), 5000);
          resources.load(`prefabs/SLOT_Picture1`, Prefab, (err, prefab) => {
            const newNode1 = instantiate(prefab);
            const newNode2 = instantiate(prefab);
            const newNode3 = instantiate(prefab);
            this.layer1Pics.push(newNode1);
            this.layer2Pics.push(newNode2);
            this.layer3Pics.push(newNode3);
            this.layout1.node.addChild(newNode1);
            this.layout2.node.addChild(newNode2);
            this.layout3.node.addChild(newNode3);
          });
        }

        update(deltaTime) {}

        async startGame() {
          this.audioManager.playRollingMusic();
          this.removeChilds(this.layout1, this.layer1Pics);
          this.removeChilds(this.layout2, this.layer2Pics);
          this.removeChilds(this.layout3, this.layer3Pics);
          this.resetLayout(this.layout1);
          this.resetLayout(this.layout2);
          this.resetLayout(this.layout3);
          await this.rollPicture(this.layout1, this.layer1Pics);
          await this.rollPicture(this.layout2, this.layer2Pics);
          await this.rollPicture(this.layout3, this.layer3Pics);
          Promise.all([this.tweenPictures(this.layout1), this.tweenPictures(this.layout2), this.tweenPictures(this.layout3)]).then(() => {
            this.checkResult(this.layer1Pics, this.layer2Pics, this.layer3Pics);
          });
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
            this.bingoNode.active = true;
            this.audioManager.playBingoMusic();
            this.bingoNode.getChildByName('Score').getComponent(Label).string = (++this.bingoTime * 100).toString();
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
              resources.load(`prefabs/SLOT_Picture${num}`, Prefab, (err, prefab) => {
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

          const nodes = await Promise.all(promises); // 打乱顺序

          const shuffledNodes = nodes.sort(() => Math.random() - 0.5); // 插入到布局和数组中

          shuffledNodes.forEach((node, index) => {
            picutreArray.push(node);
            layout.node.insertChild(node, index + 1);
          });
        }

        tweenPictures(layout) {
          return new Promise(resolve => {
            // 开始 layout 的缓动
            const layoutX = layout.node.getPosition().x;
            tween(layout.node).to(4, {
              position: new Vec3(layoutX, 850 * 20, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              resolve(true);
            }).start();
          });
        }

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

        goStart() {
          let ani = this.handleBar1.getComponent(Animation);
          ani.play('handelbar');
          this.throttledStartGame();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layout2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layout3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "handleBar1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bingoNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb7d9cb5cc99ff4c5f1972be85456215035d7fe5.js.map