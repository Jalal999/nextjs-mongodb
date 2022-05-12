import styled from 'styled-components'

export const CloseIcon = styled.span`
    width: 30px;
    height: 30px;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: -10;
    right: -10;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
