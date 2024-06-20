import header_logo from '../../../public/header_logo.png';

function Footer(){
    return (
        <footer className="top-0 left-0 right-0 bottom-0">
            <div className="bg-[#EAD8C2] h-56 w-full flex justify-between items-center pl-12 pt-1 pb-1 pr-1">
                <div className="flex">
                    <img
                        src={header_logo}
                        className="w-[120px] h-[120px] rounded-full"
                        alt="Logo"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer;