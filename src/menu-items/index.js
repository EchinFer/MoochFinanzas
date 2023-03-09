import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
const icons = {
    DashboardIcon,
    AnalyticsIcon,
    TrendingUpIcon,
    TrendingDownIcon
};


const dashboard = {
    id: 'group-dashboard',
    title: 'Inicio',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Panel',
            type: 'item',
            url: '/',
            icon: icons.DashboardIcon,
            breadcrumbs: false
        }
    ]
};

const finances = {
    id: 'group-finances',
    title: 'Finanzas',
    type: 'group',
    children: [
        {
            id: 'dashboard-finances',
            title: 'Panel',
            type: 'item',
            url: '/finances',
            icon: icons.DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'finances-incomes',
            title: 'Ingreso',
            type: 'item',
            url: '/finances/incomes',
            icon: icons.TrendingUpIcon,
            breadcrumbs: false
        },
        {
            id: 'finances-expenses',
            title: 'Gastos',
            type: 'item',
            url: '/finances/expenses',
            icon: icons.TrendingDownIcon,
            breadcrumbs: false
        },
    ]
};





const menuItems = {
    items: [dashboard, finances]
};

export default menuItems;