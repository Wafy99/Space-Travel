import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'
import Navbar from '../components/NavBar/NavBar'
import Form from '../components/Form/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Space Travel' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
