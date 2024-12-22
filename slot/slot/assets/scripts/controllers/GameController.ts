import { _decorator, Component, instantiate, Layout, Node, Prefab, resources, tween, Vec3, Animation, Label, game } from 'cc';
import { MusicController } from './MusicController';
import { GameService } from '../services/GameService';
import { FunctionUtils } from '../../utils/FunctionUtils';
const gameService = new GameService()
const functionUtils = new FunctionUtils()


const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {

    @property({type:Layout})
    private layout1:Layout = null

    @property({type:Layout})
    private layout2:Layout = null

    @property({type:Layout})
    private layout3:Layout = null

    @property({type:Node})
    private handleBar1:Node = null

    @property({type:MusicController})
    private audioManager:MusicController = null 

    @property({type:Node})
    private bingoNode:Node = null



    private throttledStartGame:() => void


    onLoad() {

        this.throttledStartGame = functionUtils.throttle(this.startGame.bind(this), 4100)

    }


    start() {

        gameService.initGame(this.layout1, this.layout2, this.layout3)

    }

    async startGame(){
        
        gameService.resetGameProperty(this.layout1, this.layout2, this.layout3)
        await gameService.startRolling(this.bingoNode, this.audioManager, this.layout1, this.layout2, this.layout3)

    }


    goStart(){

        let ani = this.handleBar1.getComponent(Animation)
        ani.play('handelbar')
        this.throttledStartGame()

    }


}


