import React from 'react';

import { GamePanelContainer } from 'containers/GamePanel'
import { BoardContainer } from 'containers/Board'

import { Container, Wrapper, Title, GitHubSrc } from './AppStyle'


export const App = () => {

	return (
		<Container>
			<Title>MineSweeper <span>VK</span></Title>
			<Wrapper>
				<GamePanelContainer />
				<BoardContainer />
			</Wrapper>
		</Container>
	);
};