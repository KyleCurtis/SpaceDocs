import Image from 'next/image'
import Rocket from "../public/Rocket-Launch.gif"
import Navbar from './Navbar';

const Header = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
                <br /><br /><br />
                <Image
                    src={Rocket}
                    alt="Rocket Launch Logo gif"
                    width="200"
                    height="220"
                    className='rocket'
                />
                {children}
            </header>
        </div>
    )
}

export default Header;