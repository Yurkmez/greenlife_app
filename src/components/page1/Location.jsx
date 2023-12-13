import IconsBlock1 from './IconsBlock1';
import styleLocation from './location.module.css';

const Location = () => {
    return (
        <>
            <h4 className={styleLocation.headText}>Локация</h4>
            <h6 className={styleLocation.headText}>
                Yesilbair, GreenLife Residence, Sera Sk. No:26, 07190
                Dosemealti/Antalya
            </h6>
            <div className={styleLocation.mainBox}>
                {/* Icons */}
                <div className={styleLocation.blockIcons}>
                    <div className={styleLocation.blockIconsInline}>
                        <IconsBlock1 />
                    </div>
                </div>
                {/* Map */}
                <div className={styleLocation.blockMap}>
                    <iframe
                        className={styleLocation.imageGoogle}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.493613458975!2d30.60373947555611!3d36.97414915787534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38d852e4efa1d%3A0x43c0473433f387be!2sGreenLife%20Residence!5e0!3m2!1sru!2str!4v1691330562295!5m2!1sru!2str"
                        width="420"
                        height="255"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Location;
