import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="main bg-white dark:bg-black">
            <div className='content bg-white dark:bg-[var(--cat-mocha-crust)]'>
             { children }
            </div>
        </div>
    )
}

export default MainLayout;