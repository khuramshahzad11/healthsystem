import { Routes, Route} from "react-router-dom";
import React from 'react'
import { AboutUs, ContactUs, Doctor, DrDashboard, DrProfile, DrsLogin, DrsRegistration, ErrorPage, Home, PatientsLogin, PatientsRegistration, ServerError } from "../pages";
import {Appointments, ChangePassword, Dashboard, Invoice, MyPatients, ProfileEditing, Reviews, ScheduleMeeting } from "../components/DoctorDashboard/components";
import DoctorDashboard from "../components/DoctorDashboard/pages/DoctorDashboard";
import PatientDashboard from "../components/PatientDashboard/pages/PatientDashboard";
import {Favourites, Patient, PatientChangePassword, PatientProfileEditing, } from "../components/PatientDashboard/components";

const Routers = () => {
  return (
    <div>


      <Routes>
      
        
        {/* Doctor's Routes */}
        <Route path="/DoctorDashboard/" element={<DoctorDashboard />}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="appointments" element={<Appointments/>}/>

        </Route>

        {/* Patient's Routes */}
        <Route path="/PatientDashboard/" element={<PatientDashboard />}>
          <Route path="patient" element={<Patient/>}/>
        <Route path="favourites" element={<Favourites/>} />
          <Route path="patientprofileedit" element={<PatientProfileEditing/>}/>
          <Route path="patientchangepassword" element={<PatientChangePassword/>}/>
        </Route>

      </Routes>

    </div>
  )
}

export default Routers

