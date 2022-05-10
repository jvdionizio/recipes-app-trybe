import styled from 'styled-components';

const RenderRecipes = styled.div`
   margin-left: 0px;
   margin-right: 0px;
   width: -webkit-fill-available;
   height: 200px;
   // margin-bottom:4px; 
   position: relative;
   display: inline-block;
   
    
   

img {
    width: -webkit-fill-available;
    height: 200px;
    padding: 5px;

}

p {
    font-weight: 700;
    position: absolute;
    bottom: 3px;
    left: 16px;
    font-size: 20px;
    color: white;
    line-height: 27px;
    z-index: 2;
}
    

div {
    position: absolute;
    width: -webkit-fill-available;
    height: 200px;
    background: linear-gradient(transparent 35%,#191919);
    z-index: 1;
    margin: -200px;
}


`;

export default RenderRecipes;
