// Dependencies
import styled from 'styled-components';

// Icons
import { ReactComponent as CloudyIcon } from '../../assets/weatherIcons/cloudy.svg';
import { ReactComponent as ClearNight } from '../../assets/weatherIcons/clearNight.svg';
import { ReactComponent as CloudyWithLightning } from '../../assets/weatherIcons/cloudyWithLightning.svg';
import { ReactComponent as CloudyWithMoon } from '../../assets/weatherIcons/cloudyWithMoon.svg';
import { ReactComponent as CloudyWithRainAndLightning } from '../../assets/weatherIcons/cloudyWithRainAndLightning.svg';
import { ReactComponent as CloudyWithSun } from '../../assets/weatherIcons/cloudyWithSun.svg';
import { ReactComponent as Rainy } from '../../assets/weatherIcons/rainy.svg';
import { ReactComponent as Snowy } from '../../assets/weatherIcons/snowy.svg';
import { ReactComponent as Sunny } from '../../assets/weatherIcons/sunny.svg';
import { ReactComponent as SunnyAndWind } from '../../assets/weatherIcons/sunnyAndWind.svg';
import {
    StyledDayDetailContainer,
    StyledBoxTitle,
    WeatherIconContainer,
    TemperatureContainer,
    TemperatureFontContainer,
    TemperatureMinContainer,
} from './styles';

export type DayDetailProps = {
    day: string,
    minTemperature: string,
    maxTemperature: string,
    weatherKey: 'clearNight' | 'cloudy' | 'cloudyWithLightning' | 'cloudyWithMoon'
    | 'cloudyWithRainAndLightning' | 'cloudyWithSun' | 'rainy' | 'snowy' | 'sunny'
    | 'sunnyAndWind',
}

const WeaterIcon = {
    clearNight: <ClearNight />,
    cloudy: <CloudyIcon />,
    cloudyWithLightning: <CloudyWithLightning />,
    cloudyWithMoon: <CloudyWithMoon />,
    cloudyWithRainAndLightning: <CloudyWithRainAndLightning />,
    cloudyWithSun: <CloudyWithSun />,
    rainy: <Rainy />,
    snowy: <Snowy />,
    sunny: <Sunny />,
    sunnyAndWind: <SunnyAndWind />,
};

const MIN_TEMP_COLOR = '#A09FB1';
const MAX_TEMP_COLOR = '#E7E7EB';

const DayDetail = ({ day, minTemperature, maxTemperature, weatherKey }: DayDetailProps) => {
    return (
        <StyledDayDetailContainer>
            <StyledBoxTitle>
                {day}
            </StyledBoxTitle>
            <WeatherIconContainer>
                {WeaterIcon[weatherKey]}
            </WeatherIconContainer>
            <TemperatureContainer>
                <TemperatureMinContainer color={MAX_TEMP_COLOR}>
                    {maxTemperature}
                </TemperatureMinContainer>
                <TemperatureFontContainer color={MIN_TEMP_COLOR}>
                    {minTemperature}
                </TemperatureFontContainer>
            </TemperatureContainer>
        </StyledDayDetailContainer>
    );
};

export default DayDetail;