import { MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;
  return (
    <div>
      <div className="max-w-sm rounded-2xl shadow-lg p-5 bg-white border border-gray-100">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={company_logo}
              alt={company}
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{company}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} /> {location}
              </p>
            </div>
          </div>
          <span className="text-green-500 text-lg">⚡</span>
        </div>

        {/* Job Title */}
        <h2 className="mt-4 font-bold text-lg">{title} </h2>

        {/* Job Meta */}
        <div className="flex gap-4 text-gray-500 text-sm mt-2">
          <span className="flex items-center gap-1">
            <Briefcase size={14} /> {jobType}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> 4 minutes ago
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3">{description}</p>

        {/* Skills */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {requirements.map((requirement, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
            >
              {requirement}
            </span>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-blue-600 text-xs">
            Salary : {salaryRange?.min} - {salaryRange?.max}{" "}
            {salaryRange.currency}
          </p>
          <Link
            to={`/jobs/${_id}`}
            className="px-5 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
