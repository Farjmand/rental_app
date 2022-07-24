import { React , useState, useEffect} from "react";
import { ethers } from "ethers";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { SmallButton } from '../elements/SmallButton';
import Logo from "../../assets/Logo.png";
import {
  Header,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Button
} from "./NavbarElements";

const Menu = () => {

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <div>
	<Header>
    <Nav>
    <NavbarContainer>
        <NavLogo to="/">
          <NavLogo.Image src={Logo} alt="infinity" />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
         
          <NavMenu>
            <NavItem>
              <NavLinks to="category" spy={true} smooth={true} offset={150} duration={500}> CATEGORY </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap" spy={true} smooth={true} offset={150} duration={500}> ROADMAP </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" spy={true} smooth={true} offset={150} duration={500}>ABOUT </NavLinks>
            </NavItem>
            <NavItem>
              <Button onClick={connectWallet}>
              {isConnected ? (
                  <Button.Text className="info"> {accountAddress.slice(0, 4)}...
                  {accountAddress.slice(38, 42)}</Button.Text>
                ) : (
                <Button.Text> CONNECT WALLET </Button.Text>
                )}
              </Button>
            </NavItem>
          </NavMenu>
        
      </NavbarContainer>
    </Nav>
    </Header>
    </div>
  );
};

export default Menu;
