System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Layout, Node, Prefab, resources, tween, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "953f5Qby6JDnrFDhUl94Dwd", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Layout', 'Node', 'Prefab', 'resources', 'SpriteFrame', 'tween', 'Vec2', 'Vec3']);

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
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "layout1", _descriptor, this);

          _initializerDefineProperty(this, "layout2", _descriptor2, this);

          _initializerDefineProperty(this, "layout3", _descriptor3, this);

          _initializerDefineProperty(this, "handleBar", _descriptor4, this);

          this.layer1Pics = [];
          this.layer2Pics = [];
          this.layer3Pics = [];
          this.playTime = 1;
        }

        start() {
          resources.load("11", Prefab, (err, prefab) => {
            var newNode1 = instantiate(prefab);
            var newNode2 = instantiate(prefab);
            var newNode3 = instantiate(prefab);
            this.layer1Pics.push(newNode1);
            this.layer2Pics.push(newNode2);
            this.layer3Pics.push(newNode3);
            this.layout1.node.addChild(newNode1);
            this.layout2.node.addChild(newNode2);
            this.layout3.node.addChild(newNode3);
          }); // console.log(this.layer1Pics)
          // console.log(this.layer2Pics)
          // console.log(this.layer3Pics)
        }

        update(deltaTime) {}

        startGame() {
          console.log(this.layer1Pics);
          console.log(this.layer2Pics);
          console.log(this.layer3Pics);
          this.removeChilds(this.layout1, this.layer1Pics);
          this.removeChilds(this.layout2, this.layer2Pics);
          this.removeChilds(this.layout3, this.layer3Pics);
          this.resetLayout(this.layout1);
          this.resetLayout(this.layout2);
          this.resetLayout(this.layout3);
          this.rollPicture(this.layout1, this.layer1Pics);
          this.rollPicture(this.layout2, this.layer2Pics);
          this.rollPicture(this.layout3, this.layer3Pics);
          this.playTime++; // console.log(this.layout1.node.children.length)
        }

        removeChilds(layout, pictureArray) {
          var lastNode = pictureArray.findLast(item => {
            return item;
          }); // console.log(lastNode)

          for (var node of pictureArray) {
            if (node !== lastNode) {
              layout.node.removeChild(node);
            }
          }

          pictureArray.splice(0, pictureArray.length - 1); // console.log(pictureArray.length)
          // console.log(pictureArray[0])
        }

        resetLayout(layout) {
          layout.node.setPosition(new Vec3(0, 0, 0));
        }

        rollPicture(layout, picutreArray) {
          return _asyncToGenerator(function* () {
            var promises = [];

            var _loop = function* _loop() {
              var num = Math.floor(Math.random() * 4 + 1);
              var promise = new Promise((resolve, reject) => {
                resources.load("1" + num, Prefab, (err, prefab) => {
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

            try {
              // 等待所有加载完成
              var nodes = yield Promise.all(promises); // 打乱顺序

              var shuffledNodes = nodes.sort(() => Math.random() - 0.5); // 插入到布局和数组中

              shuffledNodes.forEach((node, index) => {
                picutreArray.push(node);
                layout.node.insertChild(node, index + 1);
              }); // 开始 layout 的缓动

              var layoutX = layout.node.getPosition().x;
              tween(layout.node).to(4, {
                position: new Vec3(layoutX, 850 * 20, 0)
              }, {
                easing: 'sineInOut'
              }).start();
            } catch (err) {
              console.error("加载失败:", err);
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layout2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layout3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "handleBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92542536a302db970e4273c229fe4b1b14ea2823.js.map