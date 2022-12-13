import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SuccessStories from '../components/SuccessStories'

export default function LandingPage() {
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <PageContainer>
                <Header/>
                <MainSection/>
                <SuccessStories/>
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