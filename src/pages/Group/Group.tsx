import { Flex } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContentGroup from "../../components/ContentGroup/ContentGroup";

const Group = () => {
    return ( 
        <Flex>
            <Sidebar />
            <ContentGroup/>
        </Flex>
     );
}
 
export default Group;