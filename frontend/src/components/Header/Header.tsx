import header_logo from '../../../public/header_logo.png';
import {Link, NavLink} from 'react-router-dom';

function Header(){
    return(
        <header className="bg-[#EAD8C2] font-Jockey text-[18px]">
            <nav className="flex justify-between items-center mx-auto max-w-screen-2xl px-4 py-4">
                <div className='w-[5%] h-[5%]'>
                    <Link to="/">
                        <img 
                            src={header_logo} 
                            className='w-17 h-16 rounded-full'
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <ul className="flex gap-10">
                        <li>
                            <NavLink 
                            to="/"
                            className={({isActive})=>
                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#022E43]" : "text-[#543f3f]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#543f3f] lg:p-0`
                            }
                            >
                                Home 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/personal"
                            className={({isActive})=>
                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#022E43]" : "text-[#543f3f]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#543f3f] lg:p-0`
                            }
                            >
                                Personal Diary 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/public"
                            className={({isActive})=>
                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#022E43]" : "text-[#543f3f]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#543f3f] lg:p-0`
                            }
                            >
                                Public Diary 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/about"
                            className={({isActive})=>
                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#022E43]" : "text-[#543f3f]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#543f3f] lg:p-0`
                            }
                            >
                                About Us 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/contact"
                            className={({isActive})=>
                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#022E43]" : "text-[#543f3f]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#543f3f] lg:p-0`
                            }
                            >
                                Contact Us 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/privacy"
                            className={({isActive})=>
                             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#022E43]" : "text-[#543f3f]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#543f3f] lg:p-0`
                            }
                            >
                                Privacy 
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="content-center">
                    user
                </div>
            </nav>
        </header>
    )
}

export default Header;