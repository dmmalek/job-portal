import { useEffect, useState } from "react";
import useAuth from "../../custom-hook/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobPosts, setJobPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobPosts(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">My Job Posts</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Title</th>
                <th>Location</th>
                <th>Type</th>
                <th>Category</th>
                <th>Salary</th>
                <th>Deadline</th>
                <th>Applicant</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobPosts.map((job, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="flex items-center gap-2">
                    <img
                      src={job.company_logo}
                      alt={job.company}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{job.company}</span>
                  </td>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>
                    <span className="badge badge-info">{job.jobType}</span>
                  </td>
                  <td>{job.category}</td>
                  <td>
                    {job.salaryRange.min} - {job.salaryRange.max}{" "}
                    {job.salaryRange.currency.toUpperCase()}
                  </td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    <Link to={`/viewJobApplication/${job?._id}`}>
                      View Applicant
                    </Link>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        job.status === "active"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;
