import {
    ServicesBgContainer, 
    Heading, 
    DisplayAllServicesContainer, 
    DisplayServiceItem,  
    Img, 
    DisplayService
} from './styledComponents';

import { allServicesDataArray } from '../Data';

const Services = () => {
    return (
        <ServicesBgContainer>
            <Heading>
                Our Services – What We Do Best
            </Heading>
            <DisplayAllServicesContainer>
                {
                    allServicesDataArray.map(eachService => (
                        <DisplayServiceItem key={eachService.id}>
                            <Img 
                                alt={`${eachService.serviceName}-${eachService.id}`} 
                                src={eachService.logoImg} 
                            />
                            <DisplayService>{eachService.serviceName}</DisplayService>
                        </DisplayServiceItem>
                    ))
                }
            </DisplayAllServicesContainer>
        </ServicesBgContainer>
    );
}

export default Services;
