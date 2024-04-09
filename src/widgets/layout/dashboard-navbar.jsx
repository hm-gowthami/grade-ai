import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faGraduationCap,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export function DashboardNavbar() {
  return (
    <Navbar fullWidth>
      <div className="flex justify-between gap-6 md:flex-row md:items-center">
        <div className="flex justify-between gap-6 md:flex-row md:items-center">
          {" "}
          <Link to="/dashboard/home">
            <Button
              variant="text"
              color="blue"
              className="hidden items-center gap-1 px-4 xl:flex "
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FontAwesomeIcon
                  icon={faHouse}
                  size="2xl"
                  style={{ paddingRight: "10px" }}
                />
                <h2 style={{ paddingTop: "8px", fontSize:"17px" }}> Dashboard </h2>
              </div>
            </Button>
          </Link>
          <Link to="/dashboard/teach">
            <Button
              variant="text"
              color="blue"
              className="hidden items-center gap-1 px-4 xl:flex "
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  size="2xl"
                  style={{ paddingRight: "10px" }}
                />
                <h2 style={{ paddingTop: "8px", fontSize:"17px" }}> Teacher </h2>
              </div>{" "}
            </Button>
          </Link>
          <Link to="/dashboard/student">
            <Button
              variant="text"
              color="blue"
              className="hidden items-center gap-1 px-4 xl:flex "
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size="2xl"
                  style={{ paddingRight: "10px" }}
                />{" "}
                <h2 style={{ paddingTop: "8px", fontSize:"17px" }}> Student </h2>
              </div>{" "}
            </Button>
          </Link>{" "}
        </div>
        <Link to="/auth/sign-in">
          <Button
            variant="text"
            color="blue"
            className="hidden items-center gap-1 px-4 xl:flex "
          >
            {" "}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                size="2xl"
                style={{ paddingRight: "10px" }}
              />
              <h2 style={{ paddingTop: "5px", fontSize:"17px" }}> Sign Out </h2>
            </div>
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
