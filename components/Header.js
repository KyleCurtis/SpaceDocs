import Image from 'next/image'
import Rocket from "../public/rocket-book.png"

const Header = ({ children }) => {
    return (
        <div>
            <header className='bg-white dark:bg-[var(--cat-mocha-base)] border-solid border-2 border-black dark:border-[var(--cat-mocha-text)]'>
                <br /><br /><br /><br />
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