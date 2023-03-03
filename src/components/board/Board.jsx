import React from 'react'

import { CellContainer } from 'containers/Cell'

import { Wrapper } from './BoardStyle'


export const Board = ({onRightClickBoard}) => {

	return (
		<Wrapper onContextMenu = {(e) => onRightClickBoard(e)}>
			{
				Array(256).fill(0).map((_, i) => 
					<CellContainer 
						key = {i} 
						x = {i % 16} 
						y = {Math.floor(i / 16)}
					/>
				)
			}
		</Wrapper>
	);
};