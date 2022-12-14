import react from 'react'
import styled from 'styled-components'
import BlogPreview from '../components/BlogPreview'
import Blog1 from '../assets/Blog1.svg'
import Blog2 from '../assets/Blog2.svg'
import Blog3 from '../assets/Blog3.svg'

export default function Blog() {
    return(
        <BlogContainer id='blog'>
            <h2 style={{fontSize: '56px', color: '#FFAC00', fontWeight: '600', marginTop: '45px'}}>Read our blog</h2>
            <h4 style={{fontSize: '20px', fontWeight: '400', width: '580px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>
                Join our growing community of Pure Matchers and keep posted
                on development updates.
            </h4>
            <div style={{display: 'flex', justifyContent:'center', gap: '25px'}}>
                <BlogPreview  
                    category="Development" 
                    title="Updates and Rewards for Patience!"
                    author="Shaela"
                    date="Oct 29, 2021" 
                    image={Blog1}
                />
                <BlogPreview 
                    category="Development"
                    title="GOOD NEWS! (Server is up! Matches are happening!)"
                    author="Pure Match Team"
                    date="Jun 6, 2021" 
                    image={Blog2}
                />
                <BlogPreview 
                    category="Community"
                    title="Problem-Solving & Moving Forward" 
                    author="Pure Match Team"
                    date="May 20, 2021"
                    image={Blog3}
                />
            </div>
            <Button>Load more stories</Button>
        </BlogContainer>
    )
}

const BlogContainer = styled.div`
    text-align: center;
`
const Button = styled.button`
    padding: 12px 24px 12px 24px;
    background-color: #FFAC00;
    border-radius: 8px;
    color: #FCFCFC;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 40px;
    &:hover{
        cursor: pointer;
    }
`