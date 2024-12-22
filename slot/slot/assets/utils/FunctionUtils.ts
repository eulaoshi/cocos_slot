
export class FunctionUtils {
    
    /**
     * 節流
     * @param fun 
     * @param delay 
     * @returns 
     */
    throttle(fun:Function, delay:number){

        let lastPlayTime = 0

        return (...args)=>{
            let nowTime = Date.now()
            if(nowTime - lastPlayTime >= delay){
                fun(...args)
                lastPlayTime = nowTime
            }
        }

    }

}


