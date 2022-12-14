import React, {useState} from 'react'
import styled from 'styled-components'

export default function StayConnected() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })

    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevContent => {
            return {
                ...prevContent,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert(`Form Submitted: \n
              Name: ${formData.name} \n
              Email: ${formData.email}`)
        location.reload()
    }

    return(
        <SectionContainer id='stay-connected'>
            <h2 style={{color: '#FCFCFC', fontWeight: '600', fontSize: '48px', paddingTop: '30px'}}>Stay connected!</h2>
            <h4 style={{fontWeight: '400', fontSize: '20px', lineHeight: '25.2px', width: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>
                Sign up for our newsletter to get the latest news and updates,
                as well as exclusive perks and offers!
            </h4>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Input 
                    style={{marginTop: '30px'}} 
                    required={true} 
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <Input 
                    required ={true} 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'/>
                <Button>Subscribe</Button>
            </form>
            <h5 style={{fontSize: '14px', fontWeight: '400', marginTop: '10px'}}>We respect your privacy.</h5>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    background-color: #00BA84;
    text-align: center;
    padding-bottom: 40px;
`
const Input = styled.input`
    background-color: white;
    margin-bottom: 15px;
    width: 480px;
    text-align: left;
    padding: 8px;
    border-radius: 8px;
    font-weight: 400;
    color: #8E8E8E;
`
const Button = styled.button`
    background-color: #FCFCFC;
    border-radius: 8px;
    padding: 12px 24px 12px 24px;
    width: 210px;
    margin-top: 20px;
    color: #008861;
    font-weight: 600;

    &:hover{
        cursor: pointer;
    }
`
