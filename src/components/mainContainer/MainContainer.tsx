import styled from 'styled-components';
import DayDetail, { DayDetailProps } from '../dayDetail/DayDetail';

const StyledMainContainer = styled.div`
    background-color: #100E1D;
    width: 100%;
    @media (max-width: 768px) {
        height: 100vh;
    }
`

const MainContainer = () => {
    const dayDetailProps: DayDetailProps = { weatherKey: 'cloudyWithSun', day: 'Sun, 7 Jun', minTemperature: '11°C', maxTemperature: '16°C' };
    return (
        <StyledMainContainer>
            <DayDetail {...dayDetailProps} />
        </StyledMainContainer>
    );
};

export default MainContainer;