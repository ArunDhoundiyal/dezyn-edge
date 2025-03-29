import styled from 'styled-components';

export const ServicesBgContainer = styled.section`
background-image:url('https://res.cloudinary.com/da52fiag8/image/upload/v1742817298/capturing-smiles-joyful-group-friends-posed-front-camera_852340-28002_ezzzw3.avif');
background-size:cover;
width:100%;
background-color:transparent;
color:#ffffff;
width:75%;
border-radius:16px;
margin-bottom:40px;
overflow:auto;
`

export const Heading = styled.h1`
color:#ffffff;
font-family:Interstate, sans-serif;
text-align:center;
font-size:40px;
margin:12px;
text-decoration:underline;
@media screen and (max-width:1000px){
font-size:30px;
}
@media screen and (max-width:350px){
font-size:25px;
}
`

export const ServicesCardContainer = styled.ul`
background: rgba(0, 0, 0, 0.5);
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
margin-top:50px;
margin:0px;
padding:0px;
`

export const EachService = styled.li`
border:solid 2px #ffffff;
border-radius:16px;
text-align:center;
padding:5px;
display:flex;
flex-direction:column;
margin:30px;
width:320px;
@media screen and (max-width:1635px){
flex-grow:1;
margin:10px;
}
@media screen and (max-width:550px){
flex-grow:1;
height:200px;
overflow:auto;
}
@media screen and (max-width:550px){
flex-grow:1;
overflow:auto;
border:none;
padding:2px;
}
`

export const ServiceHeading = styled.h2`
text-align:center;
font-weight:400;
text-decoration:underline;
font-weight:bold;
@media screen and (max-width:600px){
font-size:20px;
}
@media screen and (max-width:500px){
font-size:16px;
}
`

export const Description = styled.p`
color:#ffffff;
line-height:20px;
font-size:19px;
font-family:Roboto;
margin-left:10px;
margin-right:10px;
margin-top:18px;
@media screen and (max-width:600px){
font-size:15px;
}
`

