import {
    BannerSectionBgContainer,
    BannerContainer, 
    BannerMainHeading,
    CompanyWorkDescription,
    BannerMainHeadingTwo, 
    SpanTag
} 
from 
'./styledComponents';
const Banner = () => {
    return(
        <BannerSectionBgContainer>
                <BannerContainer>
                <BannerMainHeading>
                TELLING-STORIES | CREATING-IMPACT
                </BannerMainHeading>
                <BannerMainHeadingTwo>
                Dezyn Edge – Where Creativity Meets Excellence!
                </BannerMainHeadingTwo>
                <CompanyWorkDescription>
                <SpanTag>Dezyn Edge</SpanTag> has been the creative powerhouse behind <SpanTag>100+ brands and production houses</SpanTag> , delivering compelling visual storytelling and dynamic branding solutions. Based in <SpanTag>Delhi</SpanTag>, we have been revolutionizing businesses for over <SpanTag>11 years</SpanTag>, crafting <SpanTag>powerful, disruptive, and visually stunning identities</SpanTag> that leave a lasting impression. 
                From <SpanTag>video editing</SpanTag> to <SpanTag>Graphic designing</SpanTag>, from 
                <SpanTag> animation </SpanTag> to <SpanTag>print media</SpanTag>, we bring brands to life through immersive creativity and strategic storytelling.
                </CompanyWorkDescription>
                </BannerContainer>
        </BannerSectionBgContainer>
    )
}

export default Banner