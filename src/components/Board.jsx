import React from 'react'

import { CellContainer } from 'containers/Cell'

import styled from 'styled-components'


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


const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 8px auto 0;
	background-color: #999;
	width: 256px;

	border-bottom-color: #FFFFFF;
	border-left-color: #7b7b7b;
	border-right-color: #FFFFFF;
	border-style: solid;
	border-top-color: #7b7b7b;
	border-width: 2px;
`