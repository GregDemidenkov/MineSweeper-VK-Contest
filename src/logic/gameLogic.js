import { CODES } from 'constants/gameSettings'


export const initBoard = (width, height, mineCount) => {
	const boardSize = Array(width * height).fill(0).map((_, i) => i)
	const shuffle = []
	const boardData = []

	while (boardSize.length > width * height - mineCount) {
		const random = boardSize.splice(Math.floor(Math.random() * boardSize.length), 1)[0]
		shuffle.push(random)
	}

	for (let i = 0; i < height; i++) {
		const rowData = Array(width).fill(CODES.EMPTY)
		boardData.push(rowData)
	}

	for (let i = 0; i < shuffle.length; i++) {
		const x = shuffle[i] % width
		const y = Math.floor(shuffle[i] / width)
		boardData[y][x] = CODES.MINE
	}

	return boardData
}

export const getCellCode = (code) => {
	switch (code) {
		case CODES.EMPTY: return CODES.FLAG
		case CODES.MINE: return CODES.MINE_FLAG
		case CODES.FLAG: return CODES.QUESTION
		case CODES.MINE_FLAG: return CODES.MINE_QUESTION
		case CODES.QUESTION: return CODES.EMPTY
		case CODES.MINE_QUESTION: return CODES.MINE
	}
}

export const getFlag = (code) => {
	switch (code) {
		case CODES.EMPTY:
		case CODES.MINE:
			return 1
		case CODES.FLAG:
		case CODES.MINE_FLAG:
			return -1
		default:
			return 0
	}
}

export const expandOpenedCell = (boardData, x, y) => {
	let openedCellCount = 0

	const getMineCount = (x, y) => {
		let aroundCode = []

		aroundCode = boardData[y - 1] ? aroundCode.concat(boardData[y - 1][x - 1], boardData[y - 1][x], boardData[y - 1][x + 1]) : aroundCode
		aroundCode = aroundCode.concat(boardData[y][x - 1], boardData[y][x + 1])
		aroundCode = boardData[y + 1] ? aroundCode.concat(boardData[y + 1][x - 1], boardData[y + 1][x], boardData[y + 1][x + 1]) : aroundCode

		const mines = [CODES.MINE, CODES.MINE_FLAG, CODES.MINE_QUESTION]

		return aroundCode.filter(v => mines.includes(v)).length
	}

	const dfsSearch = (x, y) => {
		if (boardData[y][x] !== CODES.EMPTY) return

		boardData[y][x] = getMineCount(x, y)
		openedCellCount++

		let aroundPoint = []
		aroundPoint = boardData[y - 1] ? aroundPoint.concat({ x: x - 1, y: y - 1 }, { x, y: y - 1 }, { x: x + 1, y: y - 1 }) : aroundPoint
		aroundPoint = aroundPoint.concat({ x: x - 1, y }, { x: x + 1, y })
		aroundPoint = boardData[y + 1] ? aroundPoint.concat({ x: x - 1, y: y + 1 }, { x, y: y + 1 }, { x: x + 1, y: y + 1 }) : aroundPoint

		if (boardData[y][x] === 0) aroundPoint.forEach(v => dfsSearch(v.x, v.y))
	}

	dfsSearch(x, y)

	return { boardData, openedCellCount }
}