import React from 'react'
import styled from 'styled-components'
import PureMatchLogo from '../assets/PureMatchLogo.svg'
import Coins from '../assets/Coins.svg'

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src={PureMatchLogo} height='56px' width='56px' />
                <h3 style={{lineHeight: '56px'}}>Pure Match</h3>
            </Logo>
            <div>
                <Navigation>
                    <a href='#main-section'><ListItem color='#93959D'>Home</ListItem></a>
                    <a href='#success-stories'><ListItem color='#93959D'>About</ListItem></a>
                    <a href='#blog'><ListItem color='#93959D'>Blog</ListItem></a>
                    <a href='#stay-connected'><ListItem color='#93959D'>Contact</ListItem></a>
                    <a href='#'> 
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={Coins} height='16px' width='16px'/>
                            <ListItem color='#FF004A'>Donate</ListItem>
                        </div>
                    </a>
                    <Button>
                        Get PureMatch
                    </Button>
                </Navigation>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 96px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    min-width: 950px;
    max-width: 1375px;
`
const Logo = styled.div`
    display: flex;
    alignContent: center;
    justifyContent: center;
    margin-right: auto;

    font-weight: 500;
    color: #0089FF;
`
const Navigation = styled.ol`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-right: 50px;
`
const ListItem = styled.li`
    padding: 5px;
    font-weight: 600;
    color: ${props => props ? props.color : 'black'};
`
const Button = styled.button`
    background-color: #0089FF;
    width: 142px
    height: 36px;
    border-radius: 8px;
    padding: 8px 16px 8px 16px;
    &:hover {
        cursor: pointer;
    }

    font-weight: 600;
    color: #FCFCFC;
`