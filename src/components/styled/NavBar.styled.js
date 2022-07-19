import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InnerContainer } from '../containers/InnerContainer';
// import { Link } from "react-scroll";

export const Header = styled.header`
	position: absolute;
	width: 100%;
	
`;

Header.Container = styled(InnerContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top:15px;
`;

Header.NavBar = styled.nav`

@media screen and (max-width: 600px) {
   display: none
  }
`;

Header.NavBar.List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

Header.NavBar.ListItem = styled.li`
	margin-left: 30px;
	list-style-type: none;
`;

Header.NavBar.Link = styled.a`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17.07px;
	color: white;
`;

Header.Logo = styled(Link)`

	align-items: center;
	margin-left:15px;
`;

Header.Logo.Image = styled.img`
	width:70px;

`;


