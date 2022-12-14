import React from 'react'
import styled from 'styled-components'
import PureMatchLogo from '../assets/PureMatchLogo.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'
import LinkedIn from '../assets/LinkedIn.svg'

export default function Footer() {
    return(
        <SectionContainer>
            <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <img src={PureMatchLogo}/>
                    <h3 style={{fontWeight: '500', fontSize: '23px', color: '#0089FF'}}>Pure Match</h3>
                </div>
                <h5 style={{marginTop: '10px', fontWeight: '500', fontSize: '12px', color: '#0089FF'}}>© 2022 Pure Match</h5>
                <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                    <a href='https://www.facebook.com/'><img height='20px' src={Facebook}/></a>
                    <a href='https://www.twitter.com/'><img height='20px' src={Twitter}/></a>
                    <a href='https://www.instagram.com/'><img height='20px' src={Instagram}/></a>
                    <a href='https://www.linkedin.com/'><img height='20px' src={LinkedIn}/></a>
                </div>
            </div>
            <div>
                <div>
                    <h3 style={{color: '#0089FF', fontWeight: 'bold', fontSize: '20px'}}>About</h3>
                    <h4 style={{lineHeight: '23px', fontWeight: 'regular', fontSize: '16px', marginTop: '5px', width: '371px'}}>
                        Pure Match is a free networking app for like-minded 
                        followers of Christ to connect, date, and socialize.
                    </h4>
                </div>
                <div style={{marginTop: '20px'}}>
                    <h3 style={{color: '#0089FF', fontWeight: 'bold', fontSize: '20px'}}>Our Mission</h3>
                    <h4 style={{lineHeight: '23px', fontWeight: 'regular', fontSize: '16px', marginTop: '5px', width: '371px'}}>
                        We’re on a mission to bring true followers of Christ
                        together in a safe, fun, and innovative new networking
                        app! And to transform single-hood into the exciting, 
                        enriching, and <strong style={{fontWeight: 'bold'}}>FUN </strong> 
                        season it was meant to be.
                    </h4>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <h3 style={{fontWeight: '700', fontSize: '20px', color: '#0089FF'}}>Navigation</h3>
                <a href='#main-section'><h4>Home</h4></a>
                <a href='#success-stories'><h4>About</h4></a>
                <a href='#blog'><h4>Blog</h4></a>
                <a href='#contact'><h4>Contact</h4></a>
                <a href='#'><h4>Donate</h4></a>
            </div>
        </SectionContainer>
    )
}

const SectionContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 60px 60px 60px 60px;
`
