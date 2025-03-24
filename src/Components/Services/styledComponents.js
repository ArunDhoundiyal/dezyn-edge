import styled  from 'styled-components';

export const ServicesBgContainer = styled.section`
background-size:cover;
height:100vh;
box-shadow: 
rgba(227, 223, 223, 0.25) 0px 54px 55px, 
rgba(227, 223, 223, 0.25) 0px -12px 30px, 
rgba(227, 223, 223, 0.25) 0px 4px 6px, 
rgba(227, 223, 223, 0.25) 0px 12px 13px, 
rgba(227, 223, 223, 0.25) 0px -3px 5px;
margin-bottom:50px;
display:flex;
flex-direction:column;
justify-content:space-around;

@media screen and (min-width:1001px){
background-image:url('https://res.cloudinary.com/da52fiag8/image/upload/v1742720089/aerial-view-business-data-analysis-graph_a3pyrj.jpg');
width:90%;
border-radius:18px;
}
@media screen and (max-width:1000px){
background-image:url('https://res.cloudinary.com/da52fiag8/image/upload/v1742726694/165166_ultkoy.jpg');
width:90%;
border-radius:18px;
}

@media screen and (max-width:600px){
background-image:url('https://res.cloudinary.com/da52fiag8/image/upload/v1742726694/165166_ultkoy.jpg');
width:90%;
border-radius:18px;
}
@media screen and (max-width:500px){
background-image:url('https://res.cloudinary.com/da52fiag8/image/upload/v1742726694/165166_ultkoy.jpg');
width:100%;
border-radius:0px;
}
`
export const Heading = styled.h1`
font-family:"Plus Jakarta Sans", sans-serif;
text-align:center;
color:#ffffff;
font-size:50px;
text-decoration:underline;
text-underline-offset: 8px;
margin-top:20px;
@media screen and (max-width:1100px){
font-size:40px;
}
@media screen and (max-width:900px){
font-size:30px;
}
@media screen and (max-width:650px){
font-size:25px;
}
@media screen and (max-width:450px){
font-size:20px;
}

`
export const DisplayAllServicesContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  background-size:cover;
  display: flex; 
  flex-direction: row;
  align-items:center;
  justify-content:space-around;
  flex-wrap: wrap;
  @media screen and (max-width:1090px){
  overflow:auto;
  }
`;

export const DisplayServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:40px;
  @media screen and (max-width:1090px){
  margin:25px;
  }
  @media screen and (max-width:960px){
  margin:20px;
  }
  @media screen and (max-width:915px){
  margin:15px;
  }
  @media screen and (max-width:870px){
  margin:10px;
  }
  @media screen and (max-width:870px){
  margin:10px;
  } 
  @media screen and (max-width:400px){
  margin:8px;
  }    
  `;


export const Img = styled.img`
height:120px;
@media screen and (max-width:735px){
height:100px;
}
@media screen and (max-width:450px){
height:80px;
}
@media screen and (max-width:400px){
height:70px;
}
`

export const DisplayService = styled.p`
color:#ffffff;
font-weight:bold;
font-family:Figtree, sans-serif;
text-decoration:underline;
text-decoration-offset:8px;
margin-top:8px;
font-size:18px;
@media screen and (max-width:825px){
font-size:15px;
}
@media screen and (max-width:400px){
font-size:12px;
}
`