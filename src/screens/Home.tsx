import CurrentDayContainer from '../components/currentDayContainer/CurrentDayContainer';
import MainContainer from '../components/mainContainer/MainContainer';
import styled from 'styled-components';

type HomeProps = {
    children: JSX.Element,
}

export const HomeContainerStyled = styled.div`
    display: flex;
    background-color: gray;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

function Home() {
    return (
        <HomeContainerStyled>
            <CurrentDayContainer />
            <MainContainer />
        </HomeContainerStyled>
    );
}

export default Home;