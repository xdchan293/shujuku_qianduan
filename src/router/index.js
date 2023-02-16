import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Student from '../views/student'
import AddIssue from '../components/forStu/add'
import Doing from '../components/forStu/doing'
import Todo from '../components/forStu/todo'
import Done from '../components/forStu/done'


import God from '../views/god'
import college1 from '../components/forGod/college'
import teacher1 from '../components/forGod/teacher'
import student1 from '../components/forGod/student'
import major1 from '../components/forGod/major'
import dept1 from '../components/forGod/dept'

import leader from '../views/leader'

import teacher from '../views/teacher'

import pass from '../views/pass'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/student',
        component: Student,
        children: [
            { path: '/AddIsuue', component: AddIssue },
            { path: '/auditing', component: Doing },
            { path: '/todo', component: Todo },
            { path: '/done', component: Done },
        ]
    },
    {
        path: '/god',
        component: God,
        children: [
            { path: '/college1', component: college1 },
            { path: '/teacher1', component: teacher1 },
            { path: '/student1', component: student1 },
            { path: '/major1', component: major1 },
            { path: '/dept1', component: dept1 },
        ]
    },
    {
        path: '/leader',
        component: leader
    },
    {
        path: '/teacher',
        component: teacher
    },
    {
        path: '/pass',
        component: pass
    },

]

const router = new VueRouter({
    routes
})

export default router