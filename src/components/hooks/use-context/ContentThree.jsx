import React from 'react'
import ContentFour from './ContentFour'

// Using Prop Drilling Method
const ContentThree = (props) => {
    return (
        <div style={{ border: '2px solid black', padding: '20px 10px' }} >
            <h5>Content Three</h5>
            {/* <p>Hello {props.bro} </p> */}
            <ContentFour />
            {/* <ContentFour bro={props.bro} /> */}
        </div>
    )
}

export default ContentThree