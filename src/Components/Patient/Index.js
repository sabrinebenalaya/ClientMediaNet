import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarItem,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import "../../Constante/Style.css";
import {
  deletePatientByIdAsync,
  getPatientByIdAsync,
} from "../../Redux/Patient/patientSlice";
import { useDispatch, useSelector } from "react-redux";
function Index() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient.patient);

  useEffect(() => {
    dispatch(getPatientByIdAsync(id));
  }, [dispatch, id]);
  const handleNavigate = (route) => {
    navigate(route);
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce patient ?"
    );

    if (confirmDelete) {
      dispatch(deletePatientByIdAsync(patient._id));
      handleNavigate("/listPatients");
    }
  };

  return (
    <div style={{ display: "flex", backgroundColor: "#eee" }}>
      <div>
        <MDBNavbar className="vh-100" style={{ backgroundColor: "#eee" }}>
          <MDBContainer fluid className="flex-column ">
            <MDBNavbarItem style={{ listStyleType: "none" }}>
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={patient.image}
                    alt="patient"
                    className="rounded-circle"
                    style={{ width: "150px", height: "150px" }}
                    fluid
                  />
                  <p
                  className=" mb-1 fw-bold"
                    onClick={() => handleNavigate(`/index/${patient._id}`)}
                    style={{
                      color: "blue",
                     
                      cursor: "pointer",
                    }}
                  >
                    {patient.prenom} {patient.nom}
                  </p>
                  <p className="text-muted mb-1">{patient.mailPatient}</p>
                  <p className="text-muted mb-1">{patient.numeroTelephone}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      className="all-button"
                      onClick={() =>
                        handleNavigate(`/index/${patient._id}/edit`)
                      }
                    >
                      Modifier
                    </button>
                    <button
                      className="bg-danger delete-button"
                      onClick={handleDelete}
                    >
                      Supprimer
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      className="all-button"
                      onClick={() =>
                        handleNavigate(`/index/${patient._id}/rdvs`)
                      }
                    >
                      RDV
                    </button>
                    <button
                      className="all-button"
                      onClick={() =>
                        handleNavigate(`/index/${patient._id}/medicaments`)
                      }
                    >
                      Medicament
                    </button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBNavbarItem>

            <MDBNavbarItem style={{ listStyleType: "none" }}>
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>
                    {" "}
                    <span className="fw-bold">Adresse : </span>{" "}
                    {patient.adresse}
                  </p>
                  <p>
                    <span className="fw-bold">Email : </span>{" "}
                    {patient.mailPatient}
                  </p>
                  <p>
                    <span className="fw-bold">GSM :</span>{" "}
                    {patient.numeroTelephone}
                  </p>
                  <p>
                    <span className="fw-bold">Note :</span>{" "}
                    {patient.notePatient}
                  </p>
                  <p
                    onClick={() => handleNavigate("/listPatients")}
                    style={{
                      color: "blue",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    Retour
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBNavbarItem>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <Outlet />
    </div>
  );
}

export default Index;
