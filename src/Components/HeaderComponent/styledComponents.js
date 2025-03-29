import styled from 'styled-components'

export const Header = styled.header`
position:fixed;
top:0;
width:100%;
overflow:auto;
height:100px;
background-color:#000000;
display:flex;
flex-direction:column;
justify-content:center;
z-index:1px;
`

export const Nav = styled.nav`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
height:100%;
`

export const Img = styled.img`
height:100%;
width:100px;
cursor:pointer;
margin-left:50px;
`

export const Button = styled.button`
color:#f8f8ff;
cursor:pointer;
@media screen and (min-width:961px){
display:none;
}
@media screen and (max-width:960px){
background-color:transparent;
font-size:22px;
margin-right:50px;
border:none;
}

`

export const Navigation = styled.ul`
list-style-type:none;
font-family: 'Poppins';
@media screen and (max-width:960px){
display:flex;
flex-direction:column;
width:100%;
position:fixed;
top:100px;
background-color:#000000;
font-weight:bold;
transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
transform: ${(props) => (props.onToggle ? "translateY(0)" : "translateY(-100%)")};
opacity: ${(props) => (props.onToggle ? "1" : "0")};
}
@media screen and (min-width:961px){
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
font-weight:bold;
height:100%;
}
`

export const Navigate = styled.li`
cursor:pointer;
@media screen and (min-width:961px){
height:100%;
display:flex;
position:relative;
flex-direction:column;
justify-content:center;
padding:20px;
color:${(props)=>props.isactive?'#000000':'#ffffff'};
background-color:${(props)=>props.isactive?'#ffffff':'#000000'};
font-size:'14px';
&::after{
content:"";
position:absolute;
left:0;
bottom:0;
height:5px;
width:0%;
background-color:${(props)=>props.isactive?'#ffffff':'#d8d8d8'};
transition: all 2s ease;
}
&:hover::after{
width:100%;
}
&:hover{
color:${(props)=>props.isactive?'#000000':'#d8d8d8'};
}
}
@media screen and (max-width:960px){
color:#f8f8ff;
background-color:${(props)=>props.isactive?'#555555':'#000000'};
font-size:16px;
padding:25px;
padding-left:20px;
display:flex;
flex-direction:row;
justify-content:center;
}
`