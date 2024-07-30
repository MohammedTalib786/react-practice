import React from 'react'
import ContentTwo from './ContentTwo'

// Using Prop Drilling Method
// const ContentOne = () => {
//     let bro = 'Talib';
//     return (
//         <>
//             <div style={{ border: '2px solid black', padding: '20px 10px' }} >
//                 <h5>Content One</h5>
//                 <p>Hello {bro} </p>
//                 <ContentTwo buddy={bro} />
//             </div>
//         </>
//     )
// }

// export default ContentOne


//  Using useContext Hook

import { createContext } from 'react';
export const MyComponent = createContext();

const ContentOne = () => {
    let bro = 'Talib';

    return (
        <>
            <div style={{ border: '2px solid black', padding: '20px 10px' }} >
                <h5>Content One</h5>
                <p>Hello {bro} </p>
                <MyComponent.Provider value={bro} >
                    <ContentTwo />
                </MyComponent.Provider>
            </div>
        </>
    )
}

export default ContentOne