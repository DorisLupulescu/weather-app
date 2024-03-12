interface IWeatherPatterns {
    [key: string]: string
}

export const weatherPatterns: IWeatherPatterns = {
    Thunderstorm: 'thunderstorm.gif',
    ClearDay: 'sun.webp',
    ClearNight: 'moonClear.gif',
    CloudsDay: 'cloudySun.gif',
    CloudsNight: 'moonCloudy.gif',
    Snow: 'snow.gif',
    Rain: 'rain.gif',
    Tornado: 'tornado.gif',
    Mist: 'fog.webp',
    Fog: 'fog.webp',
}

export const weatherConditions = [
    'Snow',
    'Rain',
    'Snow',
    'Thuderstorm',
    'Tornado',
    'Mist',
    'Fog',
]

export const weatherConditionsTimed = ['Clouds', 'Clear']
