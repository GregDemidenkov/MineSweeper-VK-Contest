import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setPressedCell } from 'redux/gameDataSlice';

import { Button } from './CellStyle'


export const Cell = ({coordinate, cellCode, onClickCell, onRightClickCell}) => {

	const dispatch = useDispatch()
	const { gameStatus, mineExploded, isPressedCell } = useSelector(state => state.gameDataState)

	return (
		<Button 
			gameStatus = {gameStatus}
			mineExploded = {mineExploded}
			coordinate = {coordinate}
			cellCode = {cellCode} 
			onClick = {() => onClickCell()}
			onContextMenu = {() => onRightClickCell()}
			onMouseDown = {() => dispatch(setPressedCell(isPressedCell))}
			onMouseUp = {() => dispatch(setPressedCell(isPressedCell))} 
		/>
	);
};