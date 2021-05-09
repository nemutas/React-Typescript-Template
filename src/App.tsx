import React from 'react';
import styled from 'styled-components';
import './styles.css';

export const App: React.FC = () => {
	return <SH1>React Template</SH1>;
};

const SH1 = styled.h1`
	color: red;
	text-align: center;
`;
