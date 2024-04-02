import {
	HiOutlineViewGrid,
	HiOutlineCube,
	// HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineReceiptTax,
	HiOutlineAnnotation,
	// HiOutlineQuestionMarkCircle,
	// HiOutlineCog,
    HiOutlineCash,
    HiOutlineUserCircle
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/product',
		icon: <HiOutlineCube />
	},
    {
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
    {
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <HiOutlineCash />

	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <HiOutlineReceiptTax />
	},
	
	
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	// {
	// 	key: 'settings',
	// 	label: 'Settings',
	// 	path: '/settings',
	// 	icon: <HiOutlineCog />
	// },
	{
		key: 'profile',
		label: 'Akshay Kovi',
        role: 'Frontend Developer',
		path: '/profile',
		icon: <HiOutlineUserCircle size={40} />
	}
]