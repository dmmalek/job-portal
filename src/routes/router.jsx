import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../home/Home";
import Register from "../register/Register";
import LogIn from "../login/LogIn";
import JobDetails from "../home/jobdetails/JobDetails";
import JobApply from "../home/jobdetails/JobApply";
import PrivateRoute from "./PrivateRoute";
import MyJobApplication from "../home/jobdetails/MyJobApplication";
import PostJob from "../home/postJob/PostJob";
import MyPostedJobs from "../home/postJob/MyPostedJobs";
import ViewJobApplications from "../home/postJob/ViewJobApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Data Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-application",
        element: (
          <PrivateRoute>
            <MyJobApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/postJob",
        element: (
          <PrivateRoute>
            <PostJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/mypostedjobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewJobApplication/:job_id",
        element: (
          <PrivateRoute>
            <ViewJobApplications />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
