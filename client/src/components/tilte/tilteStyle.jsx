import styled from 'styled-components';

const TagWrapper = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;
`;
const ThrowingTagline = styled.h1`
    flex-basis: 100%;
    font-size: 2.6rem;
    margin: 10rem 4rem 0 4rem;
    color: #c3a4af;
    font-weight: 800;
    line-height: 1.1em;
`;
const SubTagline = styled.p`
    font-size: 1.35rem;
    margin: .35rem 4rem;
    color: #3ca4af;
    font-weight: 400;
    line-height: 1.1rem;
`;

export { TagWrapper, ThrowingTagline, SubTagline };