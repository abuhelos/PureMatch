import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

export default function LandingPage() {
    return (
        <PageContainer>
            <Header/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    font-family: 'Outfit', sans-serif;
`