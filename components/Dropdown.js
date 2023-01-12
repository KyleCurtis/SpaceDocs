import Collapsible from "react-collapsible"

const Dropdown = ({triggerWord, children}) => {
    return (
        <div className='border-2 border-black overflow-hidden'>
            <Collapsible className="bg-white dark:bg-[var(--cat-mocha-crust)]" trigger={triggerWord} transitionTime={100}>
                <div className='dropdown-content'>
                    {children}
                </div>
            </Collapsible>
        </div>
    )
}

export default Dropdown;