import { useState } from 'react';
import cover from '../assets/img/cover/cradles.jpg';
import ControlButton from './components/ControlButton';
import {stop,play,prev,next,pause } from '../assets/img/buttons';
const Controls = () =>{
    const[isPaused,setIsPaused]=useState(false);
    const handlePlay = () =>{
        setIsPaused(!isPaused)
    }
    return(
        <div className="control-container">
            <img src={cover} alt="" className="audio"/>
            <div className="buttons-container">
            <ControlButton>
                <img src={prev} alt="voltar" className="icone-button"/>
            </ControlButton>
            <ControlButton>
                <img src={stop} alt="parar" className="icone-button"/>
            </ControlButton>
            <ControlButton>
                <img src={isPaused?pause:play} alt="play/pause" className="icone-button" onClick={() => handlePlay()}/>
            </ControlButton>
            <ControlButton>
                <img src={next} alt="avançar" className="icone-button"/>
            </ControlButton>
            </div>
        </div>
    )
}
export default Controls;