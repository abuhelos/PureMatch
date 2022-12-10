import React from 'react'
import styled from 'styled-components'
import PureMatchLogo from '../assets/PureMatchLogo.svg'

export default function LandingPage() {
    return (
        <div>
            <HeaderContainer>
                <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <img src={PureMatchLogo} height='56px' width='56px' />
                    <h3 style={{lineHeight: '56px'}}>Pure Match</h3>
                </div>
                <div>
                    <ol>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Donate</li>
                        <button>
                            Get PureMatch
                        </button>
                    </ol>
                </div>
            </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid black;
    height: 96px;
`
