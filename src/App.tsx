import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/termsOfUse" element={<TermsOfUsePage />} />
      <Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
    </Routes>
  );
}

export default App;
