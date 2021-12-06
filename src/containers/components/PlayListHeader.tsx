import albumImg from '../../assets/img/cover/playlist.png';

type HeaderProps = {
    title:string;
    subtitle:string;
}

const PlayListHeader = ({title,subtitle}:HeaderProps) =>{
    return(
        <div className="header-container">
            <div className="header-back"/>
            <div className="header-info">
                <img src={albumImg} alt="Capa" className="header-album" />
                <div className="info">
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>
            </div>
        </div>
    )
}
export default PlayListHeader;