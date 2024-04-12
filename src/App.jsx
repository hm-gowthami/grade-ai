import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn, SignUp } from "./pages/auth";
import TableComponent from "./pages/dashboard/tableAns/tableAns";
import AssessmentFormPage from "./pages/dashboard/Assessment/assessmentForm";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      {/* <Route path="/dashboard/assessment-form" element={<AssessmentFormPage />} />
      <Route path="/assessment" element={<TableComponent />} /> */}

      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
