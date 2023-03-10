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
	boardData: initBoard(WIDTH, HEIGHT, 0),
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
            state.boardData = initBoard(state.width, state.height, 0)
            state.flagCount = 0
            state.openedCellCount = 0
            state.mineExploded = [null, null]
            state.isPressedCell = false
        },
        updateTimer(state) {
            if(state.timer === 999) {
                state.gameStatus = GAME.LOSE
                state.timerStatus = false
            } else state.timer++
        },
        openCell(state, action) {
            if (!state.timerStatus) {
                state.timerStatus = true
                state.boardData = initBoard(state.width, state.height, MINES, action.payload.y, action.payload.x)
                state.flagCount = 0
                state.openedCellCount = 0
            }

            state.gameStatus = GAME.RUN

            const code = state.boardData[action.payload.y][action.payload.x]

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
                if (state.flagCount === 40 && (getCellCode(code) === CODES.FLAG || getCellCode(code) === CODES.MINE_FLAG || getCellCode(code) === CODES.MISS_FLAG)) return
                state.flagCount += getFlag(code)
                state.boardData[action.payload.y][action.payload.x] = getCellCode(code)
            }
        },
        setPressedCell(state, action) {
            state.isPressedCell = !action.payload
        }
    }
});

export const { setGame, restartGame, updateTimer, openCell, rotateCellState, setPressedCell } = gameDataSlice.actions

export default gameDataSlice.reducer