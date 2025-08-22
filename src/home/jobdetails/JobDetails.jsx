import { Link, useLoaderData } from "react-router-dom";
import { MapPin, Briefcase, Calendar, Building, Mail } from "lucide-react";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 rounded-xl border shadow"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      {/* Job Card */}
      <div className="card bg-base-100 shadow-xl rounded-2xl">
        <div className="card-body space-y-6">
          {/* Job Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={18} /> {location}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Briefcase size={18} /> {jobType}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={18} /> Deadline: {applicationDeadline}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              💰 {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Building size={18} /> {category}
            </div>
          </div>

          {/* Description */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Job Description</h2>
            <p className="text-gray-600">{description}</p>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Requirements</h2>
            <div className="flex flex-wrap gap-2">
              {requirements.map((req, idx) => (
                <div key={idx} className="badge badge-outline">
                  {req}
                </div>
              ))}
            </div>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold mb-2">HR Contact</h2>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={18} /> {hr_name} ({hr_email})
            </div>
          </section>

          {/* Apply Button */}
          <div className="card-actions justify-center pt-4">
            <Link to={`/apply/${_id}`} className="btn btn-primary w-full">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
