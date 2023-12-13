import { Outlet } from 'react-router-dom';
import NavbarAll from '../NavbarAll';
import FooterAll from '../FooterAll';
import styleMainLayout from './mainlayout.module.css';
const MainLayout = () => {
    return (
        <>
            <div className={styleMainLayout.mainBody}>
                <div className={styleMainLayout.wrapper}>
                    <div className={styleMainLayout.mainBlock}>
                        <NavbarAll />
                        <Outlet />
                        <FooterAll />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
