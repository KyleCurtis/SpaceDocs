import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="main bg-white dark:bg-black mx-[15px] md:mx-[15%] lg:mx-[22%]">
            <div className='content bg-white dark:bg-[var(--cat-mocha-crust)]'>
             { children }
            </div>
        </div>
    )
}

export default MainLayout;