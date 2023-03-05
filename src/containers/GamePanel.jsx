import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { restartGame, updateTimer } from 'redux/gameDataSlice'

import { GamePanel } from 'components/GanePanel'


export const GamePanelContainer = () => {

	const dispatch = useDispatch()
	const {timerStatus, timer, mineCount, flagCount } = useSelector(state => state.gameDataState)

	useEffect(() => {
		let gameTimer

		if (timerStatus) {
			gameTimer = setInterval(() => {
				dispatch(updateTimer())
			}, 1000)
		}

		return () => clearInterval(gameTimer)
	}, [timerStatus])

	const onClickRestart = () => {
		dispatch(restartGame())
	}

	return (
		<GamePanel
			mineCount = {(mineCount - flagCount).toString().padStart(3, '0')}
			timer = {timer.toString().padStart(3, '0')}
			onClickRestart = {() => onClickRestart()}
		/>
	);
};