import styled from "styled-components";

export const BannerSectionBgContainer = styled.section`
background-color:transparent;
height:100vh;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:auto;
`
export const BannerContainer = styled.div`
width:75%;
color:#ffffff;
overflow:auto;
`
export const BannerMainHeading = styled.h2`
font-family:Moderate, sans-serif;
text-decoration:underline;
letter-spacing:2px;
@media screen and (max-width:1195px){
font-size:18px;
}
@media screen and (max-width:875px){
font-size:18px;
}
@media screen and (max-width:931px){
font-size:16px;
}
@media screen and (max-width:845px){
font-size:14px;
}
@media screen and (max-width:760px){
font-size:12px;
}
@media screen and (max-width:670px){
font-size:10px;
}
`
export const BannerMainHeadingTwo = styled.h1`
font-family: Interstate, sans-serif;
font-size:100px;
word-spacing:-15px;
letter-spacing:-2px;
word-spacing:1px;
@media screen and (max-width:1200px){
font-size:80px;
}
@media screen and (max-width:920px){
font-size:70px;
}
@media screen and (max-width:875px){
font-size:60px;
}
@media screen and (max-width:745px){
font-size:50px;
}
@media screen and (max-width:615px){
font-size:40px;
}
@media screen and (max-width:495px){
font-size:35px;
}
@media screen and (max-width:415px){
font-size:30px;
}
`

export const CompanyWorkDescription = styled.p`
font-family:"Plus Jakarta Sans", sans-serif;
color:#dcdcdc;
font-size:20px;
margin-top:18px;
@media screen and (max-width:615px){
font-size:16px;
}
@media screen and (max-width:495px){
font-size:12px;
}
`
export const SpanTag = styled.span`
font-weight:bold;
text-decoration:underline;
color:#ffffff;
`

