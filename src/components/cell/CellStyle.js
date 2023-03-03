import styled from 'styled-components';

import { CODES, GAME } from 'constants/gameSettings';

import sprite from 'assets/sprite.png'

export const Button = styled.button`
	background-color: #c2c2c2;
	width: 16px;
	height: 16px;
	border: none;

	${({ cellCode, gameStatus, mineExploded, coordinate }) => {
		switch (cellCode) {
			case CODES.EMPTY:
				return gameStatus === GAME.WIN
					? `
						background-image: url(${sprite});
						background-position: -17px -51px;
					` 
					: `
						background-image: url(${sprite});
						background-position: 0 -51px;
						`
			case CODES.MINE:
				return gameStatus === GAME.LOSE
					? 
						(mineExploded[0] === coordinate[0] && mineExploded[1] === coordinate[1])
						?
						`
							background-image: url(${sprite});
							background-position: -102px -51px;
						` 
						:
						`
							background-image: url(${sprite});
							background-position: -85px -51px;
						`
					: `
						background-image: url(${sprite});
						background-position: 0 -51px;
					`
			case CODES.MINE_FLAG:
				return `
					background-image: url(${sprite});
					background-position: -34px -51px;		
				`
			case CODES.FLAG:
				return gameStatus === GAME.LOSE
				?
					`
						background-image: url(${sprite});
						background-position: -119px -51px;		
					`
				:
					`
						background-image: url(${sprite});
						background-position: -34px -51px;		
					`
			case CODES.MINE_QUESTION:
			case CODES.QUESTION:
				return `
					background-image: url(${sprite});
					background-position: -51px -51px;
				`
			default:
				return `
					background-image: url(${sprite});
					background-position: -17px -51px;
				`
		}
	}};

	${({ cellCode }) => {
		switch (cellCode) {
			case 1:
				return `
				background-image: url(${sprite});
				background-position: 0px -68px;

			` 
			case 2:
				return `
				background-image: url(${sprite});
				background-position: -17px -68px;

			` 
			case 3:
				return `
				background-image: url(${sprite});
				background-position: -34px -68px;

			` 
			case 4:
				return `
				background-image: url(${sprite});
				background-position: -51px -68px;

			` 
			case 5:
				return `
				background-image: url(${sprite});
				background-position: -68px -68px;

			` 
			case 6:
				return `
				background-image: url(${sprite});
				background-position: -85px -68px;

			` 
			case 7:
				return `
				background-image: url(${sprite});
				background-position: -102px -68px;

			` 
			case 8:
				return `
				background-image: url(${sprite});
				background-position: -1019px -68px;

			` 
		}
	}};
`;