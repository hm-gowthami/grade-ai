
import { Link, NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export function Sidenav({ routes }) {
  return (
    <aside
       >
      <div className="m-2">
        {routes.map(({ layout, pages }, key) => (
          <ul key={key}>
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
