import './navbar.scss'
import Person2Icon from '@mui/icons-material/Person2';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import VideocamIcon from '@mui/icons-material/Videocam';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AppsIcon from '@mui/icons-material/Apps';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="left">
                    <span>HF</span>
                </div>
                <div className="center">
                    <div className="center-item">
                        <span className="center-item-icon"><VideocamIcon /></span>
                        <span className="center-item-text">LIVE</span>
                    </div>
                    <div className="center-item">
                        <span className="center-item-icon"><BookmarkAddedIcon /></span>
                        <span className="center-item-text">MEMBERSHIP</span>
                    </div>
                    <div className="center-item">
                        <span className="center-item-icon"><DirectionsRunIcon /></span>
                        <span className="center-item-text">PLANS</span>
                    </div>
                    <div className="center-item">
                        <span className="center-item-icon"><AppsIcon /></span>
                        <span className="center-item-text">MORE</span>
                    </div>

                </div>
                <div className="right">
                    <span className="icon"><Person2Icon /></span>
                    <span className="login">Login</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar