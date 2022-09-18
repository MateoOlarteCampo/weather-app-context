import styled from 'styled-components';

const StyledCurrentDayContainer = styled.div`
    background-color: #1E213A;
    width: 460px;
    height: 300vh;
    @media (max-width: 768px) {
        height: 100px;
        width: 100%;
    }
`;

const CurrentDayContainer = () => {
    return (
        <StyledCurrentDayContainer />
    );
};

export default CurrentDayContainer;