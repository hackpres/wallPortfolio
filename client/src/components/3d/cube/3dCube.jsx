import React from 'react';
import {
    CubeWrapper,
    CubeFront,
    CubeSpinBack,
    CubeSpinTop,
    CubeSpinBottom,
    CubeLeft,
    CubeRight,
    CubeSpin
} from './cube_style';

function TriDCube() {
  return (
    <CubeWrapper>
        <CubeSpin>
            <CubeFront>FRONT</CubeFront>
            <CubeSpinBack>BACK</CubeSpinBack>
            <CubeSpinTop>TOP</CubeSpinTop>
            <CubeSpinBottom>BOTTOM</CubeSpinBottom>
            <CubeLeft>LEFT</CubeLeft>
            <CubeRight>RIGHT</CubeRight>
        </CubeSpin>
    </CubeWrapper>
  )
}

export default TriDCube