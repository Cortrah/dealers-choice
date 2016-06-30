import Vue from 'vue'
import Home from './Home'
import Splash from './components/Splash'
import Tabletop from './components/Tabletop'

import Router from 'vue-router'

Vue.use(Router)

let router = new Router()

router.map({
    '/': {
        component: Splash
    },
    '/tabletop': {
        component: Tabletop
    }
})

router.start(Home, 'app')