import {ServicesBgContainer, Heading, ServicesCardContainer, EachService, ServiceHeading, Description} from './styledComponents';
import {allServicesDataArray} from '../Data';
const Services = () => {
    return(
        <ServicesBgContainer>
            <Heading>
            Our Services
            </Heading>
            <ServicesCardContainer>
                {
                    allServicesDataArray.map((eachServices)=>(
                        <EachService key={eachServices.id}>
                            <ServiceHeading>
                            {eachServices.serviceName}
                            </ServiceHeading>
                            <Description>{eachServices.description}</Description>
                        </EachService>
                    ))
                }
            </ServicesCardContainer>
        </ServicesBgContainer>
    )
}

export default Services;