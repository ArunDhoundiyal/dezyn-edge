import {
    FooterContainer, 
    Img, 
    FooterCollaborate, 
    Heading, 
    Description, 
    AddressName,
    Address,
    CallUs,
    PhoneNumber,
    Company, 
    ContactUs, 
    GetInTouchHeading, 
    Input, 
    InputContainer, 
    Button, 
    EmailId, 
    Email, 
    FollowUsContainer,
    FollowUsjHeading, 
    FollowUsIconContainer, 
    LinkedinIcon, 
    InstagramIcon, 
    WhatsAppIcon, 
    YoutubeIcon, 
    PinterestIcon, 
    FacebookIcon, 
    Name


}
from
 './styledComponents';

const Footer = () => {
    return(
        <FooterContainer>
            {/*  */}
            <Company>
                <Img alt='dezyn-edge' src='https://res.cloudinary.com/da52fiag8/image/upload/v1742469988/FINAL_FINAL_LOGO-removebg-preview_e0th0v.png' />
            <FooterCollaborate>
            <Heading>Let’s Collaborate!</Heading>
            <Description>Let’s shape your brand’s visual identity & make it unforgettable!</Description>
            <Address>
                <AddressName>Address: </AddressName>
                Plot No. 1, Shakti Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014
            </Address>
            <PhoneNumber>
            <CallUs>Call us: </CallUs>
            +91 94129 90142, +91 99999 47685
            </PhoneNumber>
            <EmailId><Email>Email: </Email>dezynedge@gmail.com</EmailId>
            </FooterCollaborate>
            </Company>
            {/*  */}
            <ContactUs>
                <GetInTouchHeading>
                    CONTACT US
                </GetInTouchHeading>
                <InputContainer>
                <Input type='text' placeholder='Your name:'/>
                <Input type='email' placeholder='Your email:' />
                <Input type='text' placeholder='Your contact number:' />
                <Button>Submit Detail</Button>
                </InputContainer>            
            </ContactUs>
            {/*  */}
            <FollowUsContainer>
            <FollowUsjHeading>
                    FOLLOW US
            </FollowUsjHeading>
            <FollowUsIconContainer>
                <LinkedinIcon />
                <Name>Linkedin</Name>
            </FollowUsIconContainer>
            <FollowUsIconContainer>
                <InstagramIcon />
                <Name>Instagram</Name>
            </FollowUsIconContainer>  
            <FollowUsIconContainer>
                <WhatsAppIcon />
                <Name>Whats app</Name>
            </FollowUsIconContainer>
            <FollowUsIconContainer>
                <YoutubeIcon />
                <Name>Youtube</Name>
            </FollowUsIconContainer>
            <FollowUsIconContainer>
                <PinterestIcon />
                <Name>Pinterest</Name>
            </FollowUsIconContainer>   
            <FollowUsIconContainer>
                <FacebookIcon />
                <Name>Facebook</Name>
            </FollowUsIconContainer>  
            </FollowUsContainer>

        </FooterContainer>

    )
}

export default Footer