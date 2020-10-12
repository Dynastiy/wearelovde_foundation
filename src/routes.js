import landingPage from './components/pages/landing';
import mediaPage from './components/pages/media';
import eventPage from './components/pages/events';
import singleEvent from './components/pages/singleEvent';
import volunteerPage from './components/pages/volunteer';
import aboutPage from './components/pages/about'

export default [
    {path: '/', component: landingPage},
    {path: '/media', component: mediaPage},
    {path: '/events', component: eventPage},
    {path: '/singleEvent', component: singleEvent},
    {path: '/volunteer', component: volunteerPage},
    {path: '/about', component: aboutPage},
]