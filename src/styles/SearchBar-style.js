import styled from 'styled-components';

const SearchBarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 7px;
    background-color: var(--primary-color);
    margin-top: -8px;
    position: fixed;
    z-index: 47;
  
input {
    padding:7px;
    width: 100%;
    height: 30px;
}   

`;

export const RadioStyles = styled.label`
    padding: 7px;
    justify-content: space-between;
    color: var(--white);
    font-weight: 500;
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

label, button {
    border: solid white 2px;
    border-radius: 4px;
    display:flex;
    flex-direction: row;
    width: 144px;
    height: 26px;
    align-items: center;
    padding: 5px;
} 

button {
    background-color:var(--white);
    color: var(--primary-color);
    font-weight: 700;
    align-items: center;
    justify-content: center;
}

input {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
    
}


`;

export default SearchBarStyle;
