export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',        
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Quản Trị']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Thiết bị',
        route: '/device',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Danh sách thiết bị',
            to: '/device'
          },
          {
            name: 'Thiết bị chờ đăng',
            to: '/device/watting'
          },
          {
            name: 'Tạo thiết bị',
            to: '/device/create'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Đại lý',
        route: '/theme/typography',
        icon: 'cil-pencil',
        items: [
          {
            name: 'Danh sách Đại lý',
            to: '/base/breadcrumbs'
          },
          {
            name: 'Tạo Đại lý',
            to: '/base/breadcrumbs'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Khách hàng',
        route: '/theme/typography',
        icon: 'cil-pencil',
        items: [
          {
            name: 'Danh sách Khách hàng',
            to: '/base/breadcrumbs'
          },
          {
            name: 'Tạo Khách hàng',
            to: '/base/breadcrumbs'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'User',
        route: '/theme/typography',
        icon: 'cil-pencil',
        items: [
          {
            name: 'Danh sách User',
            to: '/base/breadcrumbs'
          },
          {
            name: 'Tạo User',
            to: '/base/breadcrumbs'
          },
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Tiện ích']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Theo dõi Tàu cá',
        to: '/theme/typography',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Tổng cục thủy sản',
        to: '/theme/typography',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Logs',
        to: '/theme/typography',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Báo cáo']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'DS thiết bị',
        to: '/charts',
        icon: 'cil-chart-pie'
      }
    ]
  }
]