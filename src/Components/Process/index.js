import {
    ProcessBgContainer, 
    DispalyItemContainer, 
    DispalyItem, 
    StepsNumber, 
    Heading, 
    Title, 
    Description
} 
from 
'./styledComponents';
import {processData} from '../Data';


const Process = () => {
    return(
        <ProcessBgContainer>
            <Title>The Process Behind The Scenes</Title>
            <DispalyItemContainer>
                {
                    processData.map(({id, title, description})=> (
                        <DispalyItem key={id}>
                            <StepsNumber>
                                {id}
                            </StepsNumber>
                            <Heading>
                                {title}
                            </Heading>
                            <Description>
                                {description}
                            </Description>
                        </DispalyItem>
                    ))
                }
            </DispalyItemContainer>
        </ProcessBgContainer>


    )
}


export default Process