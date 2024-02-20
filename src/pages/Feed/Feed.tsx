import Sidebar from "../../components/Sidebar/Sidebar";
import Content from '../../components/Content/Content';
import { Flex } from 'antd';

const Feed = () => {
    return ( 
        <Flex>
            <Sidebar />
            <Content/>
        </Flex>
     );
}
 
export default Feed;