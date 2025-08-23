import { useEffect, useState } from "react";
import useAuth from "../../custom-hook/useAuth";

const MyJobApplication = () => {
  const [myjob, setMyJob] = useState([]);
  const { user } = useAuth();
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyJob(data);
      });
  }, [user.email]);

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          My Job Applications
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Company</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Type</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Salary</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {myjob.map((job, index) => (
                <tr key={job._id}>
                  <td>{index + 1}</td>
                  <td>{job?.company}</td>
                  <td className="font-semibold">{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.jobType}</td>
                  <td>{job.category}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    {job.salaryRange?.min} - {job.salaryRange.max}{" "}
                    {job?.salaryRange?.currency}
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

export default MyJobApplication;
