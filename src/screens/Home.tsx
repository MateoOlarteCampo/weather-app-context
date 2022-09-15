import CurrentDayContainer from '../components/currentDayContainer/CurrentDayContainer';
import MainContainer from '../components/mainContainer/MainContainer';

type HomeProps = {
    children: JSX.Element,
}

function Home({ children }: HomeProps) {
    return (
        <div>
            <CurrentDayContainer />
            <MainContainer />
        </div>
    );
}

export default Home;