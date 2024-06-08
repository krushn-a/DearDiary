import header_logo from '../../../public/header_logo.png';
import "./index.css";

function Header(){
    return(
        <header className="flex-1 px-4 py-4 h-24"> 
            <img src={header_logo} className='w- h-10'/>
        </header>
    )
}

export default Header;