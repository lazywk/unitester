import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdAddBox,
  MdGroup
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUp from "views/auth/signUp";
import Teachers from "views/admin/teachers";
import AddTeacher from "views/admin/addTeacher";

const token = localStorage.getItem('token')
const role = Number(localStorage.getItem('role'))


const routes = token ? role === 1 ? [
  {
    name: "O'qituvchilar",
    layout: "/admin",
    path: "/home",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Teachers,
  },
  {
    name: "O'qituvchi qo'shish",
    layout: "/admin",
    path: "/add-teacher",
    icon: <Icon as={MdAddBox} width='20px' height='20px' color='inherit' />,
    component: AddTeacher,
  }
] : role === 2 ? [
  {
    name: "O'quvchilar",
    layout: "/admin",
    path: "/home",
    icon: <Icon as={MdGroup} width='20px' height='20px' color='inherit' />,
    component: Teachers,
  },
  {
    name: "Kontestlar",
    layout: "/admin",
    path: "/contests",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: Teachers,
  },
  {
    name: "Test qo'shish",
    layout: "/admin",
    path: "/create-test",
    icon: <Icon as={MdAddBox} width='20px' height='20px' color='inherit' />,
    component: Teachers,
  },
] : [
  {
    name: "Asosiy",
    layout: "/admin",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Kontestlar",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/contests",
    component: DataTables,
  },
  {
    name: "Profil",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  }
] : [

  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignUp,
  }
];

export default routes;
