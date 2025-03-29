import HeaderComponent from '../HeaderComponent';
import {BgContainer} from './styledComponents';
import Banner from '../Banner';
import Services from '../Services';
import WhyChooseUs from '../WhyChooseUs';
import Clients from '../Clients';
import MeetOurCreativeMinds from '../MeetOurCreativeMinds';
import Process from '../Process';
import Footer from '../Footer'
const Home = () => {
    return(
    <BgContainer>
        <HeaderComponent/>
        <Banner/>
        <WhyChooseUs/>
        <Services/>
        <Clients/>
        <Process/>
        <MeetOurCreativeMinds />
        <Footer />
    </BgContainer>
    )
}

export default Home