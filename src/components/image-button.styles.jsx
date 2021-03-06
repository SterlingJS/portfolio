import styled from 'styled-components'

// TODO: Needs to be reactive for smaller screens
// TODO: Pass in width and heigh values?
export const ImageButtonContainer = styled.button`
	
	margin: 0 .5rem;
	padding: none;
	border-radius: 4px;
	background: none;
	border: none;

	z-index: 2;
	${ props => props.width ?  `width: ${props.width};` : 'width: 6rem;' }
	${ props => props.height ? `height: ${props.height};` : 'height: 6rem;'}
	min-width: 6rem;
	min-height: 6rem;

	transition: all .05s ease-in;
	${props => props.active ? "background-color: var(--level-one);" : null}

	:focus {
		outline:0;
	}

	&:hover {
		transform: scale(1.05);
		background-color: var(--level-one);
	}
`;

export const ImageButtonImage = styled.img`
	max-width: 90%;
	max-height: 100%;
	padding: none;
	margin: none;
	border-radius: 4px;
`;