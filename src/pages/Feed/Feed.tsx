import './Feed.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from '../../components/Content/Content';

const Feed = () => {
    return ( 
        <div className='feed'>
            <Sidebar />
            <Content/>
        </div>
     );
}
 
export default Feed;