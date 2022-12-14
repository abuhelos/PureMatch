import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SuccessStories from '../components/SuccessStories'
import Blog from '../components/Blog'
import StayConnected from '../components/StayConnected'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <PageContainer>
                <Header/>
                <MainSection/>
                <SuccessStories/>
                <Blog/>
                <StayConnected/>
                <Footer/>
            </PageContainer>
        </div>
    )
}

const PageContainer = styled.div`
    font-family: 'Outfit', sans-serif;
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
`