import React from 'react'
import ContentThree from './ContentThree'

// Using Prop Drilling Method
const ContentTwo = (props) => {
    return (
        <div style={{ border: '2px solid black', padding: '20px 10px' }} >
            <h5>Content Two</h5>
            {/* <p>Hello {props.buddy} </p> */}
            <ContentThree />
            {/* <ContentThree bro={props.buddy} /> */}
        </div>
    )
}

export default ContentTwo