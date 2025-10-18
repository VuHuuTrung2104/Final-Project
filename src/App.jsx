import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PUBLIC
import MainLayout from "./components/public/MainLayout";
import Hero from "./components/public/Hero";
import About from "./components/public/About";
import Instructors from "./components/public/Instructors";
import Levels from "./components/public/Levels";
import Courses from "./components/public/Courses";
import Gallery from "./components/public/Gallery";
import Pricing from "./components/public/Pricing";
import SignupPage from "./components/public/SignupPage";
import LoginPage from "./components/public/LoginPage";
import Footer from "./components/public/Footer";

// STUDENT
import StudentLayout from "./components/student/StudentLayout";
import StudentDashboard from "./components/student/StudentDashboard";
import StudentCourses from "./components/student/StudentCourses";
import StudentCourseDetail from "./components/student/StudentCourseDetail";
import StudentSchedule from "./components/student/StudentSchedule";
import StudentMembership from "./components/student/StudentMembership";
import StudentPayments from "./components/student/StudentPayments";
import StudentNotifications from "./components/student/StudentNotifications";

// TRAINER
import TrainerLayout from "./components/trainer/TrainerLayout";
import TrainerDashboard from "./components/trainer/TrainerDashboard";
import TrainerSchedule from "./components/trainer/TrainerSchedule";
import TrainerClass from "./components/trainer/TrainerClass";
import TrainerAttendance from "./components/trainer/TrainerAttendance";
import TrainerReports from "./components/trainer/TrainerReports";
import TrainerNotifications from "./components/trainer/TrainerNotifications";

// ADMIN
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminUsers from "./components/admin/AdminUsers";
import AdminTrainers from "./components/admin/AdminTrainers";
import AdminCourses from "./components/admin/AdminCourses";
import AdminClassrooms from "./components/admin/AdminClassrooms";
import AdminSchedule from "./components/admin/AdminSchedule";
import AdminRegistrations from "./components/admin/AdminRegistrations";
import AdminMembershipPlans from "./components/admin/AdminMembershipPlans";
import AdminMemberships from "./components/admin/AdminMemberships";
import AdminPayments from "./components/admin/AdminPayments";
import AdminReports from "./components/admin/AdminReports";
import AdminNotifications from "./components/admin/AdminNotifications";
import AdminContent from "./components/admin/AdminContent";
import AdminRoles from "./components/admin/AdminRoles";
import AdminFeedback from "./components/admin/AdminFeedback";
import AdminAnalytics from "./components/admin/AdminAnalytics";
import AdminSettings from "./components/admin/AdminSettings";

function App() {
  return (
    <Router>
      <Routes>
        {/* ====== PUBLIC LAYOUT ====== */}
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="HLV"><Instructors /></section>
                <section id="service"><Levels /></section>
                <section id="courses"><Courses /></section>
                <section id="gallery"><Gallery /></section>
                <section id="pricing"><Pricing /></section>
                <Footer />
              </>
            }
          />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* ====== STUDENT LAYOUT ====== */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="courses/:id" element={<StudentCourseDetail />} />
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="membership" element={<StudentMembership />} />
          <Route path="payments" element={<StudentPayments />} />
          <Route path="notifications" element={<StudentNotifications />} />
        </Route>

        {/* ====== TRAINER LAYOUT ====== */}
        <Route path="/trainer" element={<TrainerLayout />}>
          <Route index element={<TrainerDashboard />} />
          <Route path="dashboard" element={<TrainerDashboard />} />
          <Route path="schedule" element={<TrainerSchedule />} />
          <Route path="class/:id" element={<TrainerClass />} />
          <Route path="attendance" element={<TrainerAttendance />} />
          <Route path="reports" element={<TrainerReports />} />
          <Route path="notifications" element={<TrainerNotifications />} />
        </Route>

        {/* ====== ADMIN LAYOUT ====== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="trainers" element={<AdminTrainers />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="classrooms" element={<AdminClassrooms />} />
          <Route path="schedule" element={<AdminSchedule />} />
          <Route path="registrations" element={<AdminRegistrations />} />
          <Route path="membership-plans" element={<AdminMembershipPlans />} />
          <Route path="memberships" element={<AdminMemberships />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="roles" element={<AdminRoles />} />
          <Route path="feedback" element={<AdminFeedback />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* ====== 404 NOT FOUND ====== */}
        <Route path="*" element={<h2 className="text-center mt-5">404 - Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
