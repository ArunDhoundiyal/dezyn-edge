import HeaderComponent from '../HeaderComponent';
import {BgContainer} from './styledComponents';
import Banner from '../Banner';
import Services from '../Services';
const Home = () => {
    return(
    <BgContainer>
        <HeaderComponent/>
        <Banner/>
        <Services/>
    </BgContainer>
    )
}

export default Home