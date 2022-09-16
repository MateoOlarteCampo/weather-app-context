import styled from 'styled-components';

const StyledMainContainer = styled.div`
    background-color: #100E1D;
    width: 100%;
    @media (max-width: 768px) {
        height: 100vh;
    }
`

const MainContainer = () => {
    return (
        <StyledMainContainer />
    );
};

export default MainContainer;