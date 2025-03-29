import {
    BgContainer, 
    Heading, 
    Description, 
    DisplayDesignation, 
    DesignationItem, 
    Name,
    Designation, 
    UserIcon, 
    Bold
} from './styledComponents';

import {designationDataArray} from '../Data';

const MeetOurCreativeMinds = () => {
    return(
        <BgContainer>
            <Heading>Meet Our Creative Minds</Heading>
            <Description>
            We’re a team of <Bold>passionate designers, editors, and storytellers</Bold> who believe in the <Bold>power of 
            visuals</Bold> to shape brands and captivate audiences.
            </Description>
            <DisplayDesignation>
                {
                    designationDataArray.map(({id, name, role})=>(
                        <DesignationItem key={id}>
                            <UserIcon />
                            <Name>{name}</Name>
                            <Designation>{role}</Designation>
                        </DesignationItem>
                    ))
                }

            </DisplayDesignation>
        </BgContainer>
    )
}

export default MeetOurCreativeMinds