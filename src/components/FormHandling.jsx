import React, { useState } from 'react'

const FormHandling = () => {

    const errorStyle = { color: 'red', fontWeight: '600' }

    let [theName, setTheName] = useState('')
    let [theEmail, setTheEmail] = useState('')
    let [theAge, setTheAge] = useState('')

    let [entries, setEntries] = useState({})

    let [errorName, setErrorName] = useState('')
    let [errorEmail, setErrorEmail] = useState('')
    let [errorAge, setErrorAge] = useState('')

    const handlerChangeName = (e) => setTheName(e.target.value)
    const handlerChangeEmail = (e) => setTheEmail(e.target.value)
    const handlerChangeAge = (e) => setTheAge(e.target.value)

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        if (theName.length <= 3) {
            setErrorName('**Enter more Name chars')
        }
        else if (theEmail.length <= 5) {
            setErrorEmail('**Enter more Email chars')
        }
        else if (theAge.length <= 0) {
            setErrorAge('**Enter valid chars')
        }
        else {
            setErrorName('')
            setErrorEmail('')
            setErrorAge('')
            console.log('Success')
            setEntries({ name: theName, age: theAge, email: theEmail })
            console.log(theName, theAge, theEmail)
            let aName = document.getElementById("name")
            let anEmail = document.getElementById("name")
            let anAge = document.getElementById("age")
            aName.value = ''
            anEmail.value = ''
            anAge.value = ''
        }
    }

    return (
        <>
            <h3>Form Handling</h3>

            <h3>Onchnaging Input</h3>
            <form action="#" onSubmit={handlerSubmit} method="get">
                <label htmlFor="name" className='form-label' >Name: </label> <input onChange={handlerChangeName} className='form-input' type="text" name="name" id="name" /><span style={errorStyle} > {errorName} </span> <br />
                <label htmlFor="email" className='form-label' >Email: </label> <input onChange={handlerChangeEmail} className='form-input' type="text" name="email" id="email" /><span style={errorStyle} > {errorEmail} </span> <br />
                <label htmlFor="age" className='form-label' >Age: </label> <input onChange={handlerChangeAge} className='form-input' type="number" name="age" id="age" /><span style={errorStyle} > {errorAge} </span> <br />
                <input type="submit" className='btn btn-primary' />
            </form>

            <br /><br /><br />
            {/* ============================= Results >>>>>>>>>>>>> */}

            <div className="results">
                <span> <b>Name:</b>  {entries.name} <br /></span>
                <span> <b>Email: </b> {entries.email} <br /></span>
                <span> <b>Age: </b> {entries.age} <br /></span>
            </div>
        </>
    )
}

export default FormHandling