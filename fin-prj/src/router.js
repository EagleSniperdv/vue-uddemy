import { createRouter,createWebHistory } from "vue-router";

import CoachesDetail from './pages/coaches/CoachesDetail.Vue';
import CoachesList from './pages/coaches/CoachesList.Vue';
import CoachRegistration from './pages/coaches/CoachRegistration.Vue';
import ContactCoach from './pages/requests/ContactCoach.Vue';
import RequestsReceived from './pages/requests/RequestsReceived.Vue';
import NotFound from './pages/NotFound.Vue';



const router = createRouter({
    history: createWebHistory,
    routes: [
        {path:'/', redirect: '/coaches'},
        {path:'/coaches', component: CoachesList},
        {path:'/coaches/:id', component: CoachesDetail, children: [
            {path:'/contact', component: ContactCoach},
        ]},
        {path:'/register', component: CoachRegistration},
        {path:'/requests', component: RequestsReceived},
        {path:'/:notFound(.*)', component: NotFound},
        
        
    ],
});

export default router;