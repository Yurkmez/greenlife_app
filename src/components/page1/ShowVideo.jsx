import imageLogo from '../photos/GreenLifeIcon.png';
import miniature from '../photos/GreenLifeBuild.png';
import myVideo from '../video/video2.mp4';
import styleVideo from './showvideo.module.css';
const Video = () => {
    return (
        <div className={styleVideo.blockLogoVideo}>
            {/* Logo */}
            <div className={styleVideo.blockLogo}>
                <img
                    src={imageLogo}
                    alt="Logo"
                    className={styleVideo.sizeLogo}
                />
                <h5 className={styleVideo.titleText}>
                    <strong>
                        Люкс апартаменты и дуплексы в престижном районе Антальи
                    </strong>
                    /подходят под ВНЖ и гражданство/.
                </h5>
                <br />
                <h6 className={styleVideo.titleText}>
                    (Здание снято на видео в мае 2022 г. В настоящее время все
                    основные работы завершены, здание частично заселено. По
                    состоянию на декабрь 2023 г. ведутся завершающие работы по
                    обустройсту СПА центра.)
                </h6>
            </div>
            {/* Video */}
            <div className={styleVideo.blockVideo}>
                <p>
                    <video
                        src={myVideo}
                        poster={miniature}
                        controls
                        autoPlay={false}
                        type="video/mp4"
                        className={styleVideo.sizeVideo}
                    />
                </p>
            </div>
        </div>
    );
};

export default Video;
