import { createSlice } from "@reduxjs/toolkit"

import { WIDTH, HEIGHT, MINES, GAME, CODES } from 'constants/gameSettings'

import { initBoard, expandOpenedCell, getCellCode, getFlag } from 'logic/gameLogic'


const initialState = {
    width: WIDTH,
	height: HEIGHT,
	mineCount: MINES,
	gameStatus: GAME.READY,
	timerStatus: false,
	timer: 0,
	boardData: initBoard(WIDTH, HEIGHT, MINES),
	flagCount: 0,
	openedCellCount: 0,
    mineExploded: [null, null],
    isPressedCell: false
}

const gameDataSlice = createSlice({
    name: "gameData",
    initialState,
    reducers: {
        setGame(state, action) {
            state.width = action.width
            state.height = action.height
            state.mineCount = action.mineCount
        },
        restartGame(state) {
            state.gameStatus = GAME.READY
            state.timerStatus = false
            state.timer = 0
            state.boardData = initBoard(state.width, state.height, state.mineCount)
            state.flagCount = 0
            state.openedCellCount = 0
            state.mineExploded = [null, null]
        },
        updateTimer(state) {
            if(state.timer === 999) {
                state.gameStatus = GAME.LOSE
                state.timerStatus = false
            } else state.timer++
        },
        openCell(state, action) {
            const code = state.boardData[action.payload.y][action.payload.x]
            state.gameStatus = GAME.RUN

            if (!state.timerStatus) state.timerStatus = true

            if (code === CODES.MINE) {
                state.gameStatus = GAME.LOSE
                state.timerStatus = false
                state.mineExploded = [action.payload.y, action.payload.x]
            }
            else if (code === CODES.EMPTY) {
                const expandResult = expandOpenedCell(state.boardData, action.payload.x, action.payload.y)
                state.boardData = expandResult.boardData
                state.openedCellCount += expandResult.openedCellCount

                if (state.width * state.height - state.mineCount === state.openedCellCount) {
                    state.gameStatus = GAME.WIN
                    state.timerStatus = false
                }
            }
        },
        rotateCellState(state, action) {
            const code = state.boardData[action.payload.y][action.payload.x]

            if (code !== CODES.OPENED && code < 0) {
                state.boardData[action.payload.y][action.payload.x] = getCellCode(code)
                state.flagCount += getFlag(code)
            }
        },
        setPressedCell(state, action) {
            state.isPressedCell = !action.payload
        }
    }
});

export const { setGame, restartGame, updateTimer, openCell, rotateCellState, setPressedCell } = gameDataSlice.actions

export default gameDataSlice.reducer