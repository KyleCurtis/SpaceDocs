import Header from "./Header";
import TopButton from "./TopButton";

const MainLayout = ({ children }) => {
    return (
        <>
    <TopButton></TopButton>
        <div className="main bg-white dark:bg-black mx-[15px] md:mx-[15%] lg:mx-[22%]">
            <div className='content bg-white dark:bg-[var(--cat-mocha-crust)]'>
             { children }
            </div>
        </div>
        </>
    )
}

export default MainLayout;