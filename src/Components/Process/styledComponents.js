import styled from "styled-components";

export const ProcessBgContainer = styled.section`
dispaly:flex;
flex-direction:column;
width:75%;
border:solid 1px blue;
`

export const Title = styled.h1`
color:#ffffff;
text-align:center;
`

export const DispalyItemContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-around;
border:solid 1px red;
background-color:transparent;
`

export const DispalyItem = styled.li`
display:flex;
flex-direction:column;
align-items:center;
background-color:#272727;
width:200px;
font-weight:bold;
text-align:center;
height:150px;
`

export const StepsNumber = styled.div`
background-color:#ffffff;
height:50px;
width:50px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
border-radius:50%;  
font-size:25px;

`

export const Heading = styled.h1`
color:#ffffff;
`

export const Description = styled.p`
color:#DCDCDC;
font-weight:400;
`