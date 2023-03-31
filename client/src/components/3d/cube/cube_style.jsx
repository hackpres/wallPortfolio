import styled, { keyframes } from 'styled-components';

const CubeWrapper = styled.div`
	perspective: 800px;
	perspective-origin: 50% 100px;
`
const CubeFront = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
    transform: translateZ(25px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1FE5C7;
`
const CubeLeft = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
    transform: rotateY(270deg) translateX(-25px);
	transform-origin: center left;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #06D5B5;
`
const CubeRight = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
    transform: rotateY(-270deg) translateX(25px);
	transform-origin: top right;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42A999;
`
const KeyframeSpin = keyframes`
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(-360deg) rotateY(360deg); }
`
const KeyframeMovement = keyframes`
    from { 
        left: -50px;
        top: -100px; 
    }
    to { 
        left: 80vw; 
        top: 15vh;
    }
`
const CubeSpin = styled.div`
	position: relative;
	transform-style: preserve-3d;
    transform-origin: 25px 25px;
    animation: ${KeyframeSpin} 5s infinite linear, ${KeyframeMovement} 1s linear .5s forwards;
`
const CubeSpinTop = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	transform-origin: top center;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateX(-270deg) translateY(-25px);
    background-color: #27E4C6;
`
const CubeSpinBack = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(-25px) rotateX(180deg);
    background-color: #1A9884;
`
const CubeSpinBottom = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	transform-origin: bottom center;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateX(-90deg) translateY(25px);
    background-color: #53CAB7;
`

export {
    CubeWrapper,
    CubeFront,
    CubeSpinBack,
    CubeSpinTop,
    CubeSpinBottom,
    CubeLeft,
    CubeRight,
    CubeSpin
};