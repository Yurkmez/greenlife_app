// npm install react-iconsy
import { FaGlobeAsia } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { GiBrokenHeartZone } from 'react-icons/gi';
import { MdOutlineLocalAirport } from 'react-icons/md';
import { GiModernCity } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';

import styleIcon from './iconsblock1.module.css';

const IconsBlock1 = () => {
    return (
        <div>
            <div className={styleIcon.blockFlex}>
                <div className={styleIcon.smileBlock}>
                    <FaGlobeAsia className={styleIcon.iconsSize} />
                    <p className={styleIcon.sizeTextUnderIcons}>Турция</p>
                </div>
                <div className={styleIcon.smileBlock}>
                    <MdOutlineLocalAirport className={styleIcon.iconsSize} />
                    <p className={styleIcon.sizeTextUnderIcons}>
                        Аэропорт - 20 km
                    </p>
                </div>
            </div>

            <div className={styleIcon.blockFlex}>
                <div className={styleIcon.smileBlock}>
                    <MdLocationOn className={styleIcon.iconsSize} />
                    <p className={styleIcon.sizeTextUnderIcons}>г. Анталья</p>
                </div>
                <div className={styleIcon.smileBlock}>
                    <GiModernCity className={styleIcon.iconsSize} />
                    <p className={styleIcon.sizeTextUnderIcons}>Центр - 5 km</p>
                </div>
            </div>

            <div className={styleIcon.blockFlex}>
                <div className={styleIcon.smileBlock}>
                    <GiBrokenHeartZone className={styleIcon.iconsSize} />
                    <p className={styleIcon.sizeTextUnderIcons}>
                        р-н Дошемеалти
                    </p>
                </div>
                <div className={styleIcon.smileBlock}>
                    <TbBeach className={styleIcon.iconsSize} />
                    <p className={styleIcon.sizeTextUnderIcons}>Море- 14 km</p>
                </div>
            </div>
        </div>
    );
};

export default IconsBlock1;
