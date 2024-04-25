const MENU_ITEMS = [
    {
        title: 'Today',
        pageUrl: '/today',
        color: 'secondary',
    },
    {
        title: 'Daily',
        pageUrl: '/daily',
        color: 'info',
    },
    {
        title: 'Hourly',
        pageUrl: '/hourly',
        color: 'success',
    },
    {
        title: 'Map',
        pageUrl: '/map',
        color: 'warning',
    },
]

const UNIT_SYMBOL = {
    imperial: '°F',
    metric: '°C',
}

const UNIT_DISTANCE = {
    imperial: 'miles/h',
    metric: 'm/sec',
}

export { MENU_ITEMS, UNIT_DISTANCE, UNIT_SYMBOL }
