import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
//import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons/io';
//import Ellipse1 from '../assets/img/Ellipse1.png';

function Navbar() {

    const [sidebar, setSidebar] = useState({
        bgColor1 : "clicked",
        bgColor2 : "",
        bgColor3 : "",
        bgColor4 : ""
    });

    const showSidebar1 = () => setSidebar({
        bgColor1 : "clicked",
        bgColor2 : "",
        bgColor3 : "",
        bgColor4 : ""
    });
    const showSidebar2 = () => setSidebar({
        bgColor1 : "",
        bgColor2 : "clicked",
        bgColor3 : "",
        bgColor4 : ""
    });
    const showSidebar3 = () => setSidebar({
        bgColor1 : "",
        bgColor2 : "",
        bgColor3 : "clicked",
        bgColor4 : ""
    });
    const showSidebar4 = () => setSidebar({
        bgColor1 : "",
        bgColor2 : "",
        bgColor3 : "",
        bgColor4 : "clicked"
    });

    return (
        <>
            {/*<IconContext.Provider value={{color: '#fff'}}>
                {/* <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div> */}
                <nav className='nav-menu active' /*className={sidebar ? 'nav-menu active' : 'nav-menu'}*/>
                    <ul className="nav-menu-items">
                        <li /*className='navbar-toggle' onClick={showSidebar}*/ className='auroraname'>
                            <img src={process.env.PUBLIC_URL + "/assets/img/auroraname.png"} width='180' />
                            {/* <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link> */}
                        </li>
                        <li className='nav-text'>
                            <Link to='/' className={sidebar.bgColor1} onClick={showSidebar1}>
                                {/* {item.icon} */}
                                <img src={process.env.PUBLIC_URL + "/assets/img/dashboard.png"} width='25' />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/patients' className={sidebar.bgColor2} onClick={showSidebar2}>
                                {/* {item.icon} */}
                                <img src={process.env.PUBLIC_URL + "/assets/img/patient1.png"} width='25' />
                                <span>Patients</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/staff' className={sidebar.bgColor3} onClick={showSidebar3}>
                                {/* {item.icon} */}
                                <img src={process.env.PUBLIC_URL + "/assets/img/staff.png"} width='25' />
                                <span>Staff</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/pharmacy' className={sidebar.bgColor4} onClick={showSidebar4}>
                                {/* {item.icon} */}
                                <img src={process.env.PUBLIC_URL + "/assets/img/pharmacy.png"} width='25' />
                                <span>Pharmarcy</span>
                            </Link>
                        </li>
                        {/* {SidebarData.map((item, index) => {
                            return (
                                <li id={index} key={index} className={item.cName} onClick={reply_click(index)}>
                                    <Link to={item.path}>
                                        {/* {item.icon} */}
                                       {/*</ul> <img src={Ellipse1} />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })} */}
                    </ul>
                </nav>
            {/*</IconContext.Provider>*/}
        </>
    )
}

export default Navbar;