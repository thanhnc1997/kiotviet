export const DynamicMenuConfig = {
    items: [
        {
            title: 'Tổng Quan',
            page: '/dashboard',
            icon: 'fa fa-list',
            permission: [],
            submenu: []
        },
        {
            title: 'Đối tác',
            page: '/partner/customer',
            icon: 'fa fa-cube',
            submenu: [
                {
                    title: 'Khách hàng',
                    icon: 'fa fa-dot',
                    page: '/partner/customer',
                    permission: 'dingtea_account_service_user_view',
                },
                {
                    title: 'Nhóm Khách hàng',
                    icon: 'fa fa-dot',
                    page: '/partner/group',
                    permission: 'dingtea_account_service_user_group_view',
                }
            ],
            permission: []
        },
        {
            title: 'Hàng hoá',
            page: '/product',
            icon: 'fa fa-box',
            submenu: [
                {
                    title: 'Sản phẩm',
                    icon: 'fa fa-dot',
                    page: '/partner/customer',
                    permission: 'dingtea_account_service_product_view',
                },
                {
                    title: 'Nguyên liệu',
                    icon: 'fa fa-dot',
                    page: '/product/part',
                    permission: 'dingtea_account_service_product_view',
                },
                {
                    title: 'Kiểm hàng',
                    icon: 'fa fa-dot',
                    page: '/product/stock-take',
                    permission: 'dingtea_account_service_stock_take_view',
                }
            ],
            permission: []
        }
    ]
};
