import {useState} from 'react';
import {Header, Nav, Img, Navigation, Navigate, Button} from './styledComponents';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import {navItemArray}  from '../Data'

const HeaderComponent = () => {
    const [navId, setNavId] = useState(1);
    const [navbarToggleIcon, setNavbarToggleIcon] = useState(false);
    const onClickNavItem = (id) => {
        setNavId(id);
        setNavbarToggleIcon((preState)=>(!preState))
    }
    const onClickNavbarToggle = () => {
        setNavbarToggleIcon((preState)=>(!preState))
    }
    return(
        <Header>
            <Nav>
                <Img alt='company-logo' src='https://res.cloudinary.com/da52fiag8/image/upload/v1742469988/FINAL_FINAL_LOGO-removebg-preview_e0th0v.png'/>
                <Button onClick={onClickNavbarToggle}>{navbarToggleIcon?<ImCross />:<TiThMenu />}</Button>
                <Navigation toggle={navbarToggleIcon}>
                    {
                        navItemArray.map((eachNavItem)=>(
                            <Navigate isactive={navId===eachNavItem.id} onClick={()=>{onClickNavItem(eachNavItem.id)}} key={eachNavItem.id}>{eachNavItem.navItemName}</Navigate> 
                        ))
                    }
                </Navigation>
            </Nav>

        </Header>

    )
}

export default HeaderComponent


