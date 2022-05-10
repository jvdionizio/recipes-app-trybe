import styled from 'styled-components';

const CategoriesStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 70px;
    
    
    button {
        background-color: var(--primary-color);
        color: var(--white);
        font-weight: 700;
        align-items: center;
        justify-content: center;
        border: solid var(--primary-color) 1px;
        width: 100px;
        height: 26px;
        margin: 8px;
        border-radius: 8px;
        box-shadow: 0 2px 0 black;
         
}
`;

export default CategoriesStyle;
