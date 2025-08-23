import { useParams } from "react-router-dom";
import useAuth from "../../custom-hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job Apply succefull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Job Application Form
          </h2>
          <form onSubmit={handleApplySubmit} className="space-y-4">
            {/* LinkedIn */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">LinkedIn URL</span>
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* GitHub */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">GitHub URL</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/yourusername"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Resume */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Resume URL</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="https://drive.google.com/your-resume"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full" type="submit">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
