import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/common/ScrollToTop'

// Lazy load page components for split bundles and fast initial loading
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Courses = React.lazy(() => import('./pages/Courses'))
const CourseDetail = React.lazy(() => import('./pages/CourseDetail'))
const Mentors = React.lazy(() => import('./pages/Mentors'))
const Placements = React.lazy(() => import('./pages/Placements'))
const Contact = React.lazy(() => import('./pages/Contact'))

// Premium loading spinner component to display during page chunks retrieval
function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest animate-pulse">
        Loading Solutions...
      </p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  )
}

export default App
