import styled from 'styled-components'

export const Header = styled.header`
position:fixed;
top:0px;
width:100%;
overflow:auto;
height:100px;
background-color:#000000;
display:flex;
flex-direction:column;
justify-content:center;
border-bottom:solid 1px #848482;
&:hover{
box-shadow: rgba(140, 139, 139, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}
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
@media screen and (min-width:951px){
display:none;
}
@media screen and (max-width:950px){
background-color:transparent;
font-size:22px;
margin-right:50px;
border:none;
}

`

export const Navigation = styled.ul`
list-style-type:none;
font-family:Moderate, sans-serif;
@media screen and (max-width:950px){
display:flex;
flex-direction:column;
width:100%;
position:fixed;
top:100px;
background-color:#000000;
font-weight:bold;
opacity: ${(props) => (props.toggle ? "1" : "0")};
visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
}
@media screen and (min-width:951px){
display:flex;
flex-direction:row;
gap:48px;
margin-right:50px;
font-weight:bold;
}
`

export const Navigate = styled.li`
cursor:pointer;
@media screen and (min-width:951px){
color:${(props)=>props.isactive?'#c0c0c0':'#f8f8ff'};
font-size:${(props)=>props.isactive?'16px':'14px'};
text-decoration:${(props)=>props.isactive?'underline':'none'};
text-decoration-thickness:${(props)=>props.isactive?'4px':'none'};
&:hover{
color:#c0c0c0;
}
}
@media screen and (max-width:950px){
color:#f8f8ff;
background-color:${(props)=>props.isactive?'#555555':'#000000'};
text-decoration:${(props)=>props.isactive?'underline':'none'};
text-decoration-thickness:${(props)=>props.isactive?'2px':'none'};
font-size:16px;
padding:25px;
padding-left:20px;
`