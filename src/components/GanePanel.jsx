import React from 'react'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

import sprite from 'assets/sprite.png'

import { GAME } from 'constants/gameSettings'


export const GamePanel = ({mineCount, timer, onClickRestart}) => {

	const { gameStatus, isPressedCell } = useSelector(state => state.gameDataState)

	const mineNums = String(mineCount).split('').map(el => Number(el))
	const timerNums = String(timer).split('').map(el => Number(el))

	return (
		<Wrapper>
			<Mine>
				<Num num = {mineNums[0]} />
				<Num num = {mineNums[1]} />
				<Num num = {mineNums[2]} />
			</Mine>
			<RestartButton 
				gameStatus = {gameStatus} 
				isPressedCell = {isPressedCell}
				onClick = {onClickRestart}
			/>
			<Timer>
				<Num num = {timerNums[0]} />
				<Num num = {timerNums[1]} />
				<Num num = {timerNums[2]} />
			</Timer>
		</Wrapper>
	);
};


const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 244px;
	padding: 4px 6px;

	border-bottom-color: #FFFFFF;
	border-left-color: #7b7b7b;
	border-right-color: #FFFFFF;
	border-style: solid;
	border-top-color: #7b7b7b;
	border-width: 2px;
`

const Mine = styled.div`
	display: flex;
`

const Num = styled.div`
	width: 13px;
	height: 23px;

	${({ num }) => {
		switch (num) {
			case 0:
				return `
				background-image: url(${sprite});
				background-position: -126px 0px;

			` ;
			case 1:
				return `
				background-image: url(${sprite});
				background-position: 0px 0px;

			` ;
			case 2:
				return `
				background-image: url(${sprite});
				background-position: -14px 0px;

			` ;
			case 3:
				return `
				background-image: url(${sprite});
				background-position: -28px 0px;

			` ;
			case 4:
				return `
				background-image: url(${sprite});
				background-position: -42px 0px;

			` ;
			case 5:
				return `
				background-image: url(${sprite});
				background-position: -56px 0px;

			` ;
			case 6:
				return `
				background-image: url(${sprite});
				background-position: -70px 0px;

			` ;
			case 7:
				return `
				background-image: url(${sprite});
				background-position: -84px 0px;

			` ;
			case 8:
				return `
				background-image: url(${sprite});
				background-position: -98px 0px;

			` ;
			case 9:
				return `
				background-image: url(${sprite});
				background-position: -112px 0px;
			` ;
		}
	}};
`

const RestartButton = styled.span`
	width: 26px;
	height: 26px;
	cursor: pointer;

	${({gameStatus}) => {
		switch (gameStatus) {
			case GAME.READY:
			case GAME.RUN:
				return `
					background-image: url(${sprite});
					background-position: 0px -24px;
				`
			case GAME.LOSE:
				return `
					background-image: url(${sprite});
					background-position: -108px -24px;
				`
			case GAME.WIN:
				return `
					background-image: url(${sprite});
					background-position: -81px -24px;
				`
		}
	}}

	${({isPressedCell}) => {
		if(isPressedCell) return `
			background-image: url(${sprite});
			background-position: -54px -24px;
		`
	}}

	&:active {
		background-image: url(${sprite});
		background-position: -27px -24px;
	}
`

const Timer = styled.div`
	display: flex;
`