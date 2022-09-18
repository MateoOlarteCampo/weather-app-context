import styled from 'styled-components';

export const StyledDayDetailContainer = styled.div`
    width: 120px;
    height: 177px;
    background-color: #1E213A;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledBoxTitle = styled.h3`
    color: #E7E7EB;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    padding-top: 18px;
`;

export const WeatherIconContainer = styled.div`
    height: 50px;
    width: 50px;
    margin: 10px;
`;

export const TemperatureContainer = styled.div`
    display: flex;
`;

export const TemperatureFontContainer = styled.div`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.color};
    margin-left: 16px;
`;

export const TemperatureMinContainer = styled(TemperatureFontContainer)`
    margin-left: 0px;
`;