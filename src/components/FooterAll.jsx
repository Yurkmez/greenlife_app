import { BsTelephoneFill } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import styleFooter from './footer.module.css';

const FooterAll = () => {
    return (
        <>
            <div className={styleFooter.mainBlock}>
                <h6 className={styleFooter.headerText}>
                    {' '}
                    Застройщик: компания "Halil UCHAR &Ko"
                </h6>
                {/* Contact */}
                <div className={styleFooter.contactFlexExt}>
                    <div className={styleFooter.contactBlock}>
                        <div className={styleFooter.contactFlexIner}>
                            <BsTelephoneFill className={styleFooter.icons} />
                            <p className={styleFooter.iconsText}>
                                +90 505 343 34 12
                            </p>
                        </div>
                    </div>

                    <div className={styleFooter.contactBlock}>
                        <div className={styleFooter.contactFlexIner}>
                            <FaWhatsappSquare className={styleFooter.icons} />
                            <p className={styleFooter.iconsText}>
                                +90 535 253 24 29
                            </p>
                        </div>
                    </div>

                    <div className={styleFooter.contactBlock}>
                        <div className={styleFooter.contactFlexIner}>
                            <AiOutlineMail className={styleFooter.icons} />
                            <p className={styleFooter.iconsText}>
                                {' '}
                                halilucar443@hotmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterAll;
