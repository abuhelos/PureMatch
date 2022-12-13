import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Transition} from 'react-transition-group';

import Apple from '../assets/AppStore.svg'
import Google from '../assets/GooglePlay.svg'
import MobileScreen1 from '../assets/MobileScreen1.svg'
import MobileScreen2 from '../assets/MobileScreen2.svg'
import FeaturePhoto from '../assets/FeaturePhoto.svg'
import GreenCircle from '../assets/GreenCircle.svg'
import BlueTriangle from '../assets/BlueTriangle.svg'
import OrangeRectangle from '../assets/OrangeRectangle.svg'

const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity:1},
    entered: {opacity:1},
    exiting: {opacity:0},
    exited: {opacity:0}
}

export default function MainSection() {
    const nodeRef = useRef(null)
    const [inProp, setInProp] = useState(false)

    useEffect(()=> {
        function onTimeout() {
            setInProp(prevInProp => !prevInProp)
        }
        const timeoutId = setTimeout(onTimeout, 5000)

        return () => {
            clearTimeout(timeoutId)
        }
    },[inProp])

    return(
        <div style={{maxWidth: '950px', marginLeft: 'auto', marginRight: 'auto'}}>
            <SectionContainer style={{marginBottom: '40px'}}>
                <TextContainer>
                    <h2 style={{fontWeight: '700', fontSize: '56px',color: '#0089FF', marginBottom: '15px'}}>
                        Connect, Date, and Socialize.
                    </h2>
                    <h4 style={{fontWeight: '400', lineHeight: '30px', fontSize: '20px'}}>
                        <strong style={{fontWeight:'600'}}>Pure Match</strong> is on a mission to bring like-minded followers of Christ together in a safe, innovative, and <strong style={{fontWeight:'700'}}>FREE</strong> networking app! 
                        Join us as we transform singlehood into the exciting, enriching, <strong style={{fontWeight:'700'}}>FUN</strong> season it was meant to be.
                    </h4>
                    <Button>Support the app</Button>
                    <div style={{marginTop: '25px'}}>
                        <ImageButton src={Apple} height='48px' width='166.15px'/>
                        <ImageButton style={{marginLeft: '15px'}}src={Google} height='48px' width='166.15px'/>
                    </div>
                </TextContainer>
                <Transition nodeRef={nodeRef} in={!inProp} timeout={5000}>
                    {state => (
                        <div ref={nodeRef} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <img style={{position: 'absolute'}} src={MobileScreen1} height='550px' width='500px'/>
                        </div>
                    )}
                </Transition>
                <Transition nodeRef={nodeRef} in={inProp} timeout={5000}>
                    {state => (
                        <div ref={nodeRef} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <img src={MobileScreen2} height='550px' width='500px'/>
                        </div>
                    )}
                </Transition>
            </SectionContainer>
            <SectionContainer>
                <BackgroundPhoto>
                    <img style={{position: 'absolute', zIndex: '2'}} src={FeaturePhoto}/>
                    <img style={{top: '70px', position: 'absolute', zIndex: '1'}} src={GreenCircle} height='189px' width='189px'/>
                    <img style={{top: '300px', left: '280px', position: 'absolute', zIndex: '1'}} src={BlueTriangle} height='85' width='189px'/>
                    <img style={{top: '40px', left: '260px', position: 'absolute',zIndex: '3'}} src={OrangeRectangle} height='40px' width='85px'/>
                </BackgroundPhoto>
                <TextContainer style={{width: '445px', marginLeft: '100px'}}>
                    <h2 style={{fontWeight: '700', fontSize: '48px', lineHeight: '50px', color: '#FF004A', marginBottom: '20px'}}>
                    Connect as a community
                    </h2>
                    <h4 style={{fontWeight: '400', fontSize: '20px', lineHeight: '30px'}}>
                    Dating and marriage may not be the sole focus of discipleship, but we all need connection. 
                    As Christians, it’s important to have deep relationships with like-minded believers we trust and respect; our app facilities that.
                    </h4>
                </TextContainer>
            </SectionContainer>
        </div>
    )
}

const SectionContainer = styled.div`
    display: flex;
    flex-direction row;
`
const TextContainer = styled.div`
    padding-top: 40px;
    max-width: 50%;
`
const Button = styled.button`
    widht: 194px;
    height: 49px;
    border-radius: 8px;
    padding: 12px 24px 12px 24px;
    background-color: #0089FF;
    color: #FCFCFC;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
    }
`
const ImageButton = styled.img`
    &:hover{
        cursor: pointer;
    }
`
const BackgroundPhoto = styled.div`
    position: relative;
    height: 448px;
    width: 448px;
    margin-right: auto;
`