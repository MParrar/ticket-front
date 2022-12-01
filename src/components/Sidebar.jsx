import '../App.css'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='sidebar-list'>
                {
                    SidebarData.map((value, key) => {
                        return (
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to={value.link}
                                className='sidebar-row'
                                key={key}>
                                <div className='sidebar-icon'>
                                    {value.icon}
                                </div>
                                <div className='sidebar-title'>
                                    {value.title}
                                </div>
                            </NavLink>
                        )
                    }
                    )
                }
            </ul>
        </div >
    )
}

export default Sidebar