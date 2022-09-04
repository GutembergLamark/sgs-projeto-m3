import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardDoctor from "../pages/DashboardDoctor";
import { DashboardPacient } from "../pages/DashboardPatient";
import { PageAllergiesPacient } from "../pages/PagePacient/PageAllergiesPatient";
import ListDoctor from "../pages/ListDoctor";
import { PageDiseasePacient } from "../pages/PagePacient/PageDiseasePatient";
import { PageExamsPacient } from "../pages/PagePacient/PageExamsPatient";
import { PageMedicinesPacient } from "../pages/PagePacient/PageMedicinesPatient";
import { HistoryAllergies } from "../pages/HistoricPatient/HistoricAllergies";
import { HistoryDisease } from "../pages/HistoricPatient/HistoricDisease";
import { HistoryExams } from "../pages/HistoricPatient/HistoricExams";
import { HistoryMedicines } from "../pages/HistoricPatient/HistoricMedicines";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
      <Route path="/dashboard/patient" element={<DashboardPacient />} />
      <Route
        path="/dashboard/patient/alergias"
        element={<PageAllergiesPacient />}
      />
      <Route
        path="/dashboard/patient/doenças"
        element={<PageDiseasePacient />}
      />
      <Route path="/dashboard/patient/exames" element={<PageExamsPacient />} />
      <Route
        path="/dashboard/patient/remedios"
        element={<PageMedicinesPacient />}
      />
      <Route
        path="/dashboard/patient/alergias/historico"
        element={<HistoryAllergies />}
      />
      <Route
        path="/dashboard/patient/doenças/historico"
        element={<HistoryDisease />}
      />
      <Route
        path="/dashboard/patient/exames/historico"
        element={<HistoryExams />}
      />
      <Route
        path="/dashboard/patient/remedios/historico"
        element={<HistoryMedicines />}
      />
      <Route path="/dashboard/doctor:id" element={<ListDoctor />} />
    </Routes>
  );
};

export default Router;
