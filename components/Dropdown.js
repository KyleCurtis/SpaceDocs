import Collapsible from "react-collapsible"

const Dropdown = ({triggerWord, children}) => {
    return (
        <div className='border-2 border-black'>
            <Collapsible className="bg-white" trigger={triggerWord} transitionTime={100}>
                <div className='dropdown-content'>
                    {children}
                </div>
            </Collapsible>
        </div>
    )
}

export default Dropdown;