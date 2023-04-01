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
            <CubeFront />
            <CubeSpinBack />
            <CubeSpinTop />
            <CubeSpinBottom />
            <CubeLeft />
            <CubeRight />
        </CubeSpin>
    </CubeWrapper>
  )
}

export default TriDCube