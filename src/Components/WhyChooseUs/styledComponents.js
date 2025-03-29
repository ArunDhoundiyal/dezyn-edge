import styled from 'styled-components'

export const WhyChooseUsBgContainer = styled.section`
display:flex;
flex-direction:column;
width:75%;
border:solid 1px;
background-color:#1c1c1c;
border-radius:18px;
margin-bottom:100px;
overflow:auto;
`;
export const WhyChooseUsHeading = styled.h1`
color:#ffffff;
font-family:Interstate, sans-serif;
font-size:40px;
text-decoration:underline;
text-align:center;
`;
export const WorkDisplayContainer = styled.ul`
background: transparent;
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
margin-top:50px;
margin:0px;
padding:20px;
overflow:auto;
`

export const WorkDisplayCard = styled.li`
border:solid 1px #ffffff;
flex-grow:1;
margin:12px;
padding:8px;
border-radius:18px;
display:flex;
flex-direction:column;
align-items:center;
`

export const Img = styled.img`
height:50px;
`

export const Title = styled.p`
color:#ffffff;
text-align:center;
font-weight:bold;
font-size:20px;
`
