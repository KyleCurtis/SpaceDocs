import Image from 'next/image'
import Rocket from "../public/Space.png"
import Navbar from './Navbar';

const Header = ({ children }) => {
    return (
        <div>
            <header className='bg-[#11111b] border-solid border-2 border-black dark:border-black'>
                <Navbar />
                <br />
                <Image
                    src={Rocket}
                    alt="Rocket Launch Logo"
                    className='rocket'
                />
                {children}
            </header>
        </div>
    )
}

export default Header;