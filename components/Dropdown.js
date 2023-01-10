import Collapsible from "react-collapsible"

const Dropdown = ({triggerWord, children}) => {
    return (
        <div className='dropdown'>
            <Collapsible trigger={triggerWord} transitionTime={100}>
                <div className='dropdown-content'>
                    {children}
                </div>
            </Collapsible>
        </div>
    )
}

export default Dropdown;