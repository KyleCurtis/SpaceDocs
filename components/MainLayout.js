import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <div className='content'>
             { children }
            </div>
        </div>
    )
}

export default MainLayout;