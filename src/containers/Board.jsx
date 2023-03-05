import React from 'react';

import { useSelector } from 'react-redux';

import { Board } from 'components/Board';


export const BoardContainer = () => {

	const {width, height} = useSelector(state => state.gameDataState)

	const onRightClickBoard = (e) => {
		e.preventDefault()
	}

	return (
		<Board
			width = {width}
			height = {height}
			onRightClickBoard = {onRightClickBoard}
		/>
	);
};