import {
    WhyChooseUsBgContainer, 
    WhyChooseUsHeading, 
    WorkDisplayContainer, 
    WorkDisplayCard, 
    Title, 
    Img, 
} 
from 
'./styledComponents';
import {whyChooseUs} from '../Data';
const WhyChooseUs = () => {
    return(
        <WhyChooseUsBgContainer>
            <WhyChooseUsHeading>
                Why Choose Dezyn Edge?
            </WhyChooseUsHeading>
            <WorkDisplayContainer>
                {whyChooseUs[0].whyChooseUsData.map(({ id, name, img }) => (
                    <WorkDisplayCard key={id}>
                        <Img src={img} alt={name} />
                        <Title>{name}</Title>
                    </WorkDisplayCard>
                ))}
            </WorkDisplayContainer>
        </WhyChooseUsBgContainer>

    )
}

export default WhyChooseUs;