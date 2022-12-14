import React from 'react'
import styled from 'styled-components'
import BlackCircle from '../assets/BlackCircle.svg'

export default function BlogPreview(props) {
    return(
        <PreviewContainer>
            <img src={props.image}/>
            <div style={{textAlign: 'left'}}>
                <Category>{props.category}</Category>
                <Title>{props.title}</Title>
                <div style={{display: 'flex', gap: '7px', marginTop: '10px'}}>
                    <h4 style={{fontWeight: '500'}}>{props.author}</h4>
                    <img src={BlackCircle}/>
                    <h5 style={{fontWeight: '500', color: '#9A9A9D'}}>{props.date}</h5>
                </div>
            </div>
        </PreviewContainer>
    )
}

const PreviewContainer = styled.div`
    margin-top: 60px;
    width: 296px;
`
const Category = styled.h4`
    background-color: #FFAC00;
    text-align: center; 
    color: #FCFCFC; 
    border-radius: 4px;
    font-weight: 700;
    margin-top: 7px;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
`
const Title = styled.h3`
    font-weight: 700;
    margin-top: 7px;
    width: 220px;
`