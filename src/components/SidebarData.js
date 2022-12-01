import HomeIcon from '@mui/icons-material/Home';
import BugReportIcon from '@mui/icons-material/BugReport';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/'
    }, {
        title: 'Tickets',
        icon: <BugReportIcon />,
        link: '/tickets'
    }, {
        title: 'Users',
        icon: <PersonIcon />,
        link: '/users'
    }, {
        title: 'Settings',
        icon: <SettingsIcon />,
        link: '/settings'
    },
]