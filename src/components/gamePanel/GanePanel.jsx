import React from 'react'

import { useSelector } from 'react-redux'

import { Wrapper, Mine, Num, RestartButton, Timer } from './GamePanelStyle'



export const GamePanel = ({mineCount, timer, onClickRestart}) => {

	const { gameStatus, isPressedCell } = useSelector(state => state.gameDataState)

	const mineNums = String(mineCount).split('').map(el => Number(el))
	const timerNums = String(timer).split('').map(el => Number(el))

	return (
		<Wrapper>
			<Mine>
				<Num num = {0} />
				<Num num = {mineNums[0]} />
				<Num num = {mineNums[1]} />
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