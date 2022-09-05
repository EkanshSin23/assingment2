import Navbar from '../components/navbar/Navbar'
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="home-container">
                <div className="main">
                    <div className="main-left">
                        <span>STRENGTH</span>
                    </div>
                    <div className="main-center">
                        <span>MOBILITY</span>
                    </div>
                    <div className="main-right">
                        <span>DRILL</span>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home