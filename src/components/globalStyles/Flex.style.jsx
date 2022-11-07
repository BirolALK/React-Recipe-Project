import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: ${({justifiy}) => (justifiy ? justifiy : "center")};
    align-items : ${({align}) => (align ? align : "center")};
    flex-wrap: ${({wrap}) =>wrap && wrap};


`;

export default Flex;
