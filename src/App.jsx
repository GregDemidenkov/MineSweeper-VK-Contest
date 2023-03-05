import React from 'react';

import { GamePanelContainer } from 'containers/GamePanel'
import { BoardContainer } from 'containers/Board'

import styled from 'styled-components'


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


const Container = styled.div`
	max-width: 1600px;
	margin: 0 auto;
`

const Wrapper = styled.div`
	width: 260px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin: 0 auto;

	background-color: #c2c2c2;
	border-bottom-color: #999;
	border-left-color: #FFFFFF;
	border-right-color: #999;
	border-style: solid;
	border-top-color: #FFFFFF;
	border-width: 2px;
`

const Title = styled.h1`
	text-align: center;
	color: #7b7b7b;
	margin-bottom: 10px;

	span {
		color: blue;
	}
`