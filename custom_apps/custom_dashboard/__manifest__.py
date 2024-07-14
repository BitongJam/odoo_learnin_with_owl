{
    'name': 'Custom Dashboard',
    'version': '16.0',
    'author': 'James Ortiz',
    'license': 'LGPL-3',
    'depends': [
        'web','base'
    ],
    'data':[
        'views/menu.xml'
    ],
    'auto_install': False,
    'application': False,
    'assets': {
        'web.assets_backend': [
            'custom_dashboard/static/src/components/dashboard/dashboard.js',
            'custom_dashboard/static/src/components/dashboard/dashboard.xml'
        ],
    },
}