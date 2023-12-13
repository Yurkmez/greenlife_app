// https://materializecss.com/getting-started.html
import { NavLink } from 'react-router-dom';
import styleNavbarAll from './navbarall.module.css';

const NavbarAll = () => {
    return (
        <div className={styleNavbarAll.mainDiv}>
            <p className={styleNavbarAll.subDiv}>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: 'lightgray' } : { color: 'white' }
                    }
                    to="/"
                    end
                >
                    Общая информация
                </NavLink>

                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: 'lightgray' } : { color: 'white' }
                    }
                    to="apartments"
                >
                    План апартаментов
                </NavLink>

                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: 'lightgray' } : { color: 'white' }
                    }
                    to="/contact"
                >
                    Обратная связь
                </NavLink>
            </p>
        </div>
    );
};

export default NavbarAll;
