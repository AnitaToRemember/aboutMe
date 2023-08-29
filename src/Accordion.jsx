import { useState } from "react"

function Accordion ({children, title}) {
    const[show, setShow] = useState(false)

    return(
        <div className="accordion">
            <label 
            onClick={() => setShow(!show)}>
                {show ? 'Hide ' : 'Show '} 
                {title}
            </label>
            {show && children}
        </div>
    )
}

export default Accordion