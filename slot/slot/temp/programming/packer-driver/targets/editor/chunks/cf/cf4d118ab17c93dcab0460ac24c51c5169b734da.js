System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layout, Node, Animation, Label, MusicController, GameService, FunctionUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, gameService, functionUtils, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMusicController(extras) {
    _reporterNs.report("MusicController", "./MusicController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameService(extras) {
    _reporterNs.report("GameService", "../services/GameService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctionUtils(extras) {
    _reporterNs.report("FunctionUtils", "../../utils/FunctionUtils", _context.meta, extras);
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
      Layout = _cc.Layout;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      MusicController = _unresolved_2.MusicController;
    }, function (_unresolved_3) {
      GameService = _unresolved_3.GameService;
    }, function (_unresolved_4) {
      FunctionUtils = _unresolved_4.FunctionUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "953f5Qby6JDnrFDhUl94Dwd", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Layout', 'Node', 'Prefab', 'resources', 'tween', 'Vec3', 'Animation', 'Label']);

      gameService = new (_crd && GameService === void 0 ? (_reportPossibleCrUseOfGameService({
        error: Error()
      }), GameService) : GameService)();
      functionUtils = new (_crd && FunctionUtils === void 0 ? (_reportPossibleCrUseOfFunctionUtils({
        error: Error()
      }), FunctionUtils) : FunctionUtils)();
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
          this.throttledStartGame = functionUtils.throttle(this.startGame.bind(this), 4000);
          gameService.initGame(this.layout1, this.layout2, this.layout3, this.layer1Pics, this.layer2Pics, this.layer3Pics);
        }

        async startGame() {
          this.audioManager.playRollingMusic();
          gameService.removeChilds(this.layout1, this.layer1Pics);
          gameService.removeChilds(this.layout2, this.layer2Pics);
          gameService.removeChilds(this.layout3, this.layer3Pics);
          gameService.resetLayout(this.layout1);
          gameService.resetLayout(this.layout2);
          gameService.resetLayout(this.layout3);
          await gameService.rollPicture(this.layout1, this.layer1Pics);
          await gameService.rollPicture(this.layout2, this.layer2Pics);
          await gameService.rollPicture(this.layout3, this.layer3Pics);
          Promise.all([gameService.tweenPictures(this.layout1), gameService.tweenPictures(this.layout2), gameService.tweenPictures(this.layout3)]).then(() => {
            if (gameService.checkResult(this.layer1Pics, this.layer2Pics, this.layer3Pics)) {
              this.bingoNode.active = true;
              this.audioManager.playBingoMusic();
              this.bingoNode.getChildByName('Score').getComponent(Label).string = (++this.bingoTime * 100).toString();
            }
          });
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
//# sourceMappingURL=cf4d118ab17c93dcab0460ac24c51c5169b734da.js.map