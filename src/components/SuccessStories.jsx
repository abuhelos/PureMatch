import React from 'react'
import styled from 'styled-components'
import WhiteArrows from '../assets/WhiteArrows.svg'
import ThinLine from '../assets/ThinLine.svg'
import SuccessStory from '../assets/SuccessStory.svg'
import OrangeCircle from '../assets/OrangeCircle.svg'
import OrangeRectangle from '../assets/OrangeRectangle.svg'
import ThickLine from '../assets/ThickLine.svg'
import BlueCircle from '../assets/BlueCircle.svg'

export default function SuccessStories() {
    return(
        <SectionContainer id='success-stories'>
            <TopFlex>
                <SectionTitle>
                    <h3 style={{color: '#0089FF', fontWeight: '700'}}>SUCCESS STORIES</h3>
                </SectionTitle>
                <img src={WhiteArrows} height='32px' width='96px'/>
            </TopFlex>
            <MiddleFlex>
                <div style={{width: '50%'}}>
                    <h2 style={{fontWeight: '700', fontSize: '96px', height: '80px'}}>“</h2>
                    <h3 style={{fontWeight: '700', fontSize: '28px', lineHeight: '35.28px'}}>
                        He started a conversation with me and our friendship grew so fast!
                        Now we’re dating, which is wild to me because I got the app just to get to know people. 
                        I had no idea that God would bless me with such a cool boyfriend! 
                        Super thankful for this app and definitely encourage people to try it out because you never know how God could surprise you!
                    </h3>
                    <div style={{display: 'flex', width: '200px', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px'}}>
                        <img src={ThinLine} width='40px'/>
                        <h4>Chloe and George</h4>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: '70px', justifyContent: 'space-between', marginTop: '85px'}}>
                        <img src={ThickLine}/>
                        <img src={BlueCircle}/>
                        <img src={BlueCircle}/>
                    </div>
                </div>
                    <img src={SuccessStory}/>
            </MiddleFlex>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    height: 740px;
    background-color: #0089FF;
`
const TopFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
`
const SectionTitle = styled.div`
    background-color: white;
    text-align: center;
    padding: 6px 8px 6px 8px;
`
const MiddleFlex = styled.div`
    display: flex;
    flex-direction: row;
    color: #FCFCFC;
    justify-content: space-around;
`