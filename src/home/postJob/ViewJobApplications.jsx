import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewJobApplications = () => {
  const applicants = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    // console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update Succesfull!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="w-16">#</th>
            <th>Job Id</th>
            <th>Applicant Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={applicant.job_id} className="hover">
              <td>{index + 1}</td>
              <td>{applicant.job_id}</td>
              <td>{applicant.applicant_email}</td>
              <td>
                <select
                  onChange={(e) => handleStatusUpdate(e, applicant._id)}
                  defaultValue={applicant.status || "Change Status"}
                  className="select select-xs"
                >
                  <option disabled={true}>Change Status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewJobApplications;
