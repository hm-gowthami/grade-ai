import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home,  UploadedFiles, Student, Teacher } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "upload",
      //   path: "/upload",
      //   element: <UploadedFiles />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Teacher",
        path: "/teach",
        element: <Teacher />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Student",
        path: "/student",
        element: <Student />,
      },
      
    ],
  },
 
];

export default routes;
