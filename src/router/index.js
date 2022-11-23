import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import LoginView from "../views/LoginView.vue";
import StudentsView from "../views/StudentsView.vue";
import TestView from "../views/TestView.vue";
import UserView from "../views/UserView.vue";

import allTestsView from "../views/Test/AllTestsView.vue";
import SolveTestsView from "../views/Test/AllTestsView.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/form-app",
        name: "form",
        component: FormView,
    },
    {
        path: "/test-app",
        name: "test",
        component: TestView,
        children: [
            {
                path: "all-tests",
                name: "all-tests",
                component: allTestsView,
            },
            {
                path: "test/:id",
                name: "spec-test",
                component: SolveTestsView,
            },
        ],
    },
    {
        path: "/students-app",
        name: "students",
        component: StudentsView,
    },

    {
        path: "/login-app",
        name: "login",
        component: LoginView,
    },
    {
        path: "/login-app-user",
        name: "login-user",
        component: UserView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
