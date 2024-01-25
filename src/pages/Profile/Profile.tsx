import Sidebar from '../../components/Sidebar/Sidebar';
import SingleProfile from '../../components/SingleProfile/SingleProfile';
import './Profile.scss'

const Profile = () => {

    return ( 
        <div className='profile'>
            <Sidebar />
            <SingleProfile/>
        </div>
     );
}
 
export default Profile;