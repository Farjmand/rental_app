import React from 'react';
import { SmallButton } from './elements/SmallButton';
// import { Button } from './elements/Button2';
import { Header } from './styled/NavBar.styled';
import Logo from '../assets/RNT.png';

export function Nav() {
	return (
		<div>
			<Header>
				<Header.Container>
					<Header.Logo to='/'>
						<Header.Logo.Image src={Logo} alt='infinity' />
					</Header.Logo>

					<Header.NavBar>
						<Header.NavBar.List>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to='#talent'>ABOUT</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to='#business'>CATEGORIES</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to='#roadmap'>MINT YOURS</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to='#about-us'>HOW THIS WORKS</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<SmallButton to='https://discord.com/' target='_blank'>
								<SmallButton.text> CONNECT WALLET</SmallButton.text>
								</SmallButton>
							</Header.NavBar.ListItem>
						</Header.NavBar.List>
					</Header.NavBar>
				</Header.Container>
			</Header>
		</div>
	);
}
