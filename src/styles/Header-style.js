import styled from 'styled-components';

const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding: 7px;
    background-color: var(--primary-color);
    position: fixed;
    top: 0px;
    z-index: 100;
`;

export const LogoTitle = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--white);

img {
    width: 50px;
    height: 50px;
    left: 10px;
    top: 0px;
 }   
`;

export const HeaderIcons = styled.div`
    display: flex;
    flex-direction: row;
    
input {
    padding:7px;
}    
`;

export default HeaderStyle;
