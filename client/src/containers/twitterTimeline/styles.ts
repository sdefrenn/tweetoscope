import React from "react";
import styled from "styled-components";

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'VT323', monospace;
}
`;

export const SVGContainer = styled.svg`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
`;
