import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MusicController')
export class MusicController extends Component {

    @property({type:AudioClip})
    private rollingMusicClip:AudioClip = null

    @property({type:AudioClip})
    private bingoMusicClip:AudioClip = null

    private audioSource:AudioSource

    onLoad(){
        this.audioSource = this.getComponent(AudioSource)
    }

    playRollingMusic(){
        this.audioSource.playOneShot(this.rollingMusicClip, 1)
    }

    playBingoMusic(){
        this.audioSource.playOneShot(this.bingoMusicClip, 1)
    }


}


