import { Flex } from 'antd';
import Sidebar from '../../components/Sidebar/Sidebar';
import SingleProfile from '../../components/SingleProfile/SingleProfile';
import './Profile.scss'

const Profile = () => {

    return ( 
        <Flex>
            <Sidebar />
            <SingleProfile/>
        </Flex>
     );
}
 
export default Profile;