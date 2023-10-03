import Dashboard from './components/Dashboard.vue';
import ListAppointments from './pages/appointments/ListAppointments.vue';
import ListUsers from './pages/users/ListUsers.vue';
import UpdateSetting from './pages/setting/UpdateSetting.vue';
import UpdateProfile from './pages/profile/UpdateProfile.vue';

export default [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard
    },
    {
        path: '/admin/appointment',
        name: 'admin.appointment',
        component: ListAppointments
    },
    {
        path: '/admin/user',
        name: 'admin.user',
        component: ListUsers
    },
    {
        path: '/admin/setting',
        name: 'admin.setting',
        component: UpdateSetting
    },
    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: UpdateProfile
    }
]