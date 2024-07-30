import React from 'react'

// Using Prop Drilling Method

// const ContentFour = (props) => {
//     return (
//         <div style={{ border: '2px solid black', padding: '20px 10px' }} >
//             <h5>Content Four</h5>
//             {/* <p>Hello {props.bro} </p> */}
//         </div>
//     )
// }

// export default ContentFour


// Using useContext Hook

import { useContext } from 'react'
import { MyComponent } from './ContentOne'

const ContentFour = () => {
    let myBro = useContext(MyComponent)
    return (
        <div style={{ border: '2px solid black', padding: '20px 10px' }} >
            <h5>Content Four</h5>
            <p>Bye {myBro} </p>
        </div>
    )
}

export default ContentFour