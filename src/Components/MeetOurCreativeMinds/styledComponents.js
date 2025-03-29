import styled from 'styled-components';
import { FaUser } from "react-icons/fa";
export const BgContainer = styled.section`
display:flex;
flex-direction:column;
align-items:center;
width:75%;
margin-bottom:40px;
`
export const Heading = styled.h1`
color:#ffffff;
font-size:40px;
`

export const Description = styled.p`
color:#dcdcdc;
font-size:20px;
max-width:800px;
text-align:center;
margin-top:20px;
margin-bottom:20px;
`
export const DisplayDesignation = styled.ul`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
list-style-type:none;
flex-grow:1;
`
export const DesignationItem = styled.li`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
cursor:pointer;
height:180px;
padding:20px;
margin:20px;
border-radius:18px;
background-color:#1c1c1c;
&:hover{
border:solid 1px darkgrey;
box-shadow: rgba(107, 103, 103, 0.25) 0px 54px 55px, 
rgba(107, 103, 103, 0.25) 0px -12px 30px, 
rgba(107, 103, 103, 0.25) 0px 4px 6px, 
rgba(107, 103, 103, 0.25) 0px 12px 13px, 
rgba(107, 103, 103, 0.25) 0px -3px 5px;
}
`
export const UserIcon = styled(FaUser)`
color:#ffffff;
font-size:50px;
`

export const Name = styled.h2`
color:#ffffff;
font-weight:500;
`

export const Designation = styled.p`
color:#dcdcdc;
font-size:18px;
`
export const Bold = styled.span`
color:#ffffff;
font-weight:400;
text-decoration:underline;
`
