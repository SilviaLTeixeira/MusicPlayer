import { useState } from 'react';
import {liked,noliked} from '../../assets/img/buttons';

type MusicProps = {
    title:string;
    like:boolean;
    albumName:string;
    cover:{
        default:string;
    };
};

const PlayListItem = ({title,like,albumName,cover}:MusicProps) =>{
    const [isLiked,setIsLiked]=useState(like);
    const handleLike = ()=>{
        setIsLiked(!isLiked)
    }
    return(
        <div className="music-container">
            <div className="music-info">
                <img src={cover.default} alt={title} className="music-album" />
                <div className="music-name">
                    <h4>{title}</h4>
                          -
                    <h6>{albumName}</h6>
                </div>
                <button onClick={()=>handleLike()} className="button-like">
                    <img src={isLiked ? liked : noliked} alt="like" className="like" />
                </button>
            </div>
            
        </div>
    )
}
export default PlayListItem;