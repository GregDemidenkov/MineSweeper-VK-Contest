import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { openCell, rotateCellState } from 'redux/gameDataSlice'

import { GAME } from 'constants/gameSettings'

import { Cell } from 'components/Cell'


export const CellContainer = ({x, y}) => {

	const dispatch = useDispatch()
	const {gameStatus, boardData} = useSelector(state => state.gameDataState)


	const onClickCell = () => {
		if (gameStatus === GAME.READY || gameStatus === GAME.RUN) dispatch(openCell({x, y}))
	}

	const onRightClickCell = () => {
		if (gameStatus === GAME.READY || gameStatus === GAME.RUN) dispatch(rotateCellState({x, y}))
	}

	return (
		<Cell
			coordinate = {[y, x]}
			cellCode = {boardData[y][x]}
			onClickCell = {onClickCell}
			onRightClickCell = {onRightClickCell}
		/>
	);
};