import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from  'react-scroll';
import { InnerContainer } from '../containers/InnerContainer';

export const Header = styled.header`
	position: absolute;
	width: 100%;
`;

export const Nav = styled.nav`

@media screen and (max-width: 960x) {
   transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled(InnerContainer)`
display: flex;
justify-content: space-between;
align-items: center;

`;

export const NavLogo = styled(LinkR)`

	align-items: center;
`;

NavLogo.Image = styled.img`
	width: 100%;
`;
export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:786px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100, 60%);
    font-size:1.8rem;
    cursor:pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;


    @media screen and (max-width:786px){
        display:none;
    }
`;


export const NavItem= styled.li`
margin-left: 30px;
list-style-type: none;
`;

export const NavLinks = styled(LinkS)`
	font-family: 'Sora';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: white;
    cursor: pointer;

    &.active{
        border-bottom:3px solid blue;
    }
`;

export const Button = styled.button`
  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 200px;
  height: 52px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18.14px;
  background: #ffffff;
  border-radius: 10px;
  color: rgba(0, 20, 197, 1);
  margin-right: 15px;
  text-align: center;
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

Button.Text = styled.p`
  /* Join our Community */
  height: 23px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18.14px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 20, 197, 1);
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;


