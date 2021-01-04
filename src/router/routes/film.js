import ComingSoon from '@/views/Films/ComingSoon'
import  Detail from '@/views/Films/Detail'
import Index from '@/views/Films/Index'
import NowPlaying from '@/views/Films/NowPlaying'

var Film = [
    {
        path: '/films',
        component: Index,
        children: [
            { path: 'comingsoon', component: ComingSoon },
            { path: 'nowplaying', component: NowPlaying },
        ]
    },
    {
        path: '/film/:id',
        component: Detail
    }
]

export default Film