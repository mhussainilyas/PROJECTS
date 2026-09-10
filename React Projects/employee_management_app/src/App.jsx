import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import EmployeesList from "./components/EmployeesList";
import EmployeePopup from "./utilities/EmployeePopup";
import DeletePopup from "./utilities/DeletePopup";
import { useDispatch } from "react-redux";
import { getEmployee } from "./store/thunks/employee.thunk";
import HighlightedEmployee from "./components/HighlightedEmployee";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <EmployeePopup />
      <DeletePopup />
      <HighlightedEmployee />
      <Header />
      <Layout additionalClass="flex-1">
        <EmployeesList />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
