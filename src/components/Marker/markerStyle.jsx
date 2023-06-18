import React from 'react';
import styled from '@emotion/styled'

export const MarkerComp = styled.div`
display: flex;
align-items: center;
background-color: ${props => props.background};
color: ${props => props.color};
/* width: 35%; */
padding: 10px 20px;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;

`