import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div>
            <div className="flex pt-24">
                <div className=""><Sidebar /></div>
                <Outlet />
                {/* <div className="ml-6"><Feed /></div> */}
            </div>

        </div>
    )
}

export default Body