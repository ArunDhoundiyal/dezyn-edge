import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export const FooterContainer = styled.footer`
background-color:#1c1c1c;
width:100%;
display:flex;
justify-content:space-around;
` 
export const Company = styled.div`
display:flex;
flex-direction:column;
// border:solid 1px red;
padding:12px;
`
export const Img = styled.img`
height:100px;
width:100px;
`
export const FooterCollaborate = styled.div`
display:flex;
flex-direction:column;
max-width:330px;
// border:solid 1px red;
`

export const Heading = styled.h2`
color:#ffffff;
font-weight:400;
`
export const Description = styled.p`
color:#dcdcdc;
`

export const AddressName = styled.span`
font-weight:bold;
color:#ffffff;
`

export const Address = styled.p`
color:#dcdcdc;
margin-top:12px;
`

export const PhoneNumber = styled.p`
color:#dcdcdc;
margin-top:12px;
`

export const EmailId = styled.p`
color:#dcdcdc;
margin-top:12px;
`
export const Email = styled.span`
font-weight:bold;
color:#ffffff;
`

export const CallUs = styled.span`
font-weight:bold;
color:#ffffff;
`

export const ContactUs = styled.div`
diplay:flex;
flex-direction:column;
width:330px;
padding:12px;
// border:solid 1px green;
`

export const GetInTouchHeading = styled.h2`
font-weight:400;
color:#ffffff;
text-align:center;
`

export const InputContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:12px;
// border:solid 1px green;
`

export const Input = styled.input`
height:45px;
outline: none;
font-size:16px;
font-family:roboto;
color:#ffffff;
padding-left:8px;
border-radius:8px;
width:100%;
background-color:transparent;
border: solid 1px #64748b;
margin-bottom:18px;
&::placeholder{
color:#ffffff;
padding-left:8px;
}
`

export const Button = styled.button`
background-color:#ffffff;
height:40px;
border:none;
font-weight:bold;
font-family: Roboto;
font-size:18px;
border-radius:8px;
width:100%;
`

export const FollowUsContainer = styled.div`
diplay:flex;
flex-direction:column;
width:330px;
padding:12px;
// border:solid 1px blue;
`

export const FollowUsjHeading = styled.h2`
font-weight:400;
color:#ffffff;
text-align:center;
`

export const FollowUsIconContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
// border:solid 1px green;
margin:8px;
height:fit-content;
width:fit-content;
`

export const LinkedinIcon = styled(FaLinkedinIn)`
font-size:50px;
color:#ffffff;
margin-right:8px;
`
export const InstagramIcon = styled(FaInstagram)`
font-size:50px;
color:#ffffff;
margin-right:8px;
`
export const WhatsAppIcon = styled(SiWhatsapp)`
font-size:50px;
color:#ffffff;
margin-right:8px;
`
export const YoutubeIcon = styled(IoLogoYoutube)`
font-size:50px;
color:#ffffff;
margin-right:8px;
`
export const PinterestIcon = styled(FaPinterest)`
font-size:50px;
color:#ffffff;
margin-right:8px;
`
export const FacebookIcon = styled(FaFacebook)`
font-size:50px;
color:#ffffff;
margin-right:8px;
`

export const Name = styled.p`
color:#ffffff;
`