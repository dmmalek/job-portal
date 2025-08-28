import Swal from "sweetalert2";
import useAuth from "../../custom-hook/useAuth";

const PostJob = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    const { min, max, currency, ...newJob } = formData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Job post successfull",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Info */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
        />
        <select name="jobType" className="select select-bordered w-full">
          <option disabled defaultValue={"Job Type"}>
            Job Type
          </option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-site</option>
        </select>
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
        />
        <input
          type="date"
          name="applicationDeadline"
          className="input input-bordered w-full"
        />

        {/* Salary Range */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            name="min"
            placeholder="Min Salary"
            className="input input-bordered flex-1"
          />
          <input
            type="number"
            name="max"
            placeholder="Max Salary"
            className="input input-bordered flex-1"
          />
          <select name="currency" className="select select-bordered w-32">
            <option value="bdt" defaultValue={"BDT"}>
              BDT
            </option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>

        {/* Company Info */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="input input-bordered w-full"
        />
        <input
          type="url"
          name="company_logo"
          placeholder="Company Logo URL"
          className="input input-bordered w-full"
        />

        {/* Job Description */}
        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered w-full h-32"
        ></textarea>

        {/* Requirements */}
        <textarea
          name="requirements"
          placeholder="Job Requirements"
          className="textarea textarea-bordered w-full h-32"
        ></textarea>

        {/* Responsibilities */}
        <textarea
          name="responsibilities"
          placeholder="Job Responsibilities"
          className="textarea textarea-bordered w-full h-32"
        ></textarea>

        {/* HR Info */}
        <input
          type="text"
          name="hr_name"
          placeholder="HR Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="hr_email"
          defaultValue={user?.email}
          placeholder="HR Email"
          className="input input-bordered w-full"
        />

        {/* Status */}
        <select name="status" className="select select-bordered w-full">
          <option value="active" selected>
            Active
          </option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
