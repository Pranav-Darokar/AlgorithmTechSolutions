import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, Calendar, CheckCircle2, ShieldCheck, Mail, Phone, Send, GraduationCap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion'
import CourseCard from '@/components/common/CourseCard'
import { courses } from '@/data/courses'

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = courses.find((c) => c.id === courseId)

  // Enquiry Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!course) {
    return (
      <Container className="py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold font-display">Course Not Found</h2>
        <p className="text-muted-foreground">The program you are trying to view does not exist in our catalog.</p>
        <Link to="/courses">
          <Button variant="gradient">Back to Courses</Button>
        </Link>
      </Container>
    )
  }

  // Related programs filter
  const relatedCourses = courses.filter((c) => c.id !== course.id).slice(0, 3)

  const validateForm = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please input a valid email'
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{10,13}$/.test(formData.phone)) {
      tempErrors.phone = 'Please input a valid 10-digit number'
    }
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', note: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <div className="pb-24">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-card border-b py-12 md:py-16">

        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Link to="/courses" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
              <ArrowLeft size={12} /> Back to Courses
            </Link>
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {course.skillLevel}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display max-w-4xl leading-tight">
                {course.name} Professional Certification
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
                {course.shortDescription}
              </p>
            </div>
          </div>

          {course.image && (
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-56 sm:h-72 object-cover"
              />
            </div>
          )}
        </Container>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b py-3 text-xs text-muted-foreground">
        <Container className="flex items-center gap-1.5">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-primary">Courses</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{course.name}</span>
        </Container>
      </div>

      {/* 2. BODY CONTENT LAYOUT */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Left Side: Syllabus and Info */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Duration details card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-card/40 backdrop-blur-sm border border-border/50">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-2.5 rounded-lg border border-primary/20">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Duration</h4>
                  <p className="text-sm font-bold">{course.duration}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border border-border/50">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="bg-secondary/10 text-secondary p-2.5 rounded-lg border border-secondary/20">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Learning Mode</h4>
                  <p className="text-sm font-bold">{course.learningMode}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 backdrop-blur-sm border border-border/50">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="bg-[#DF8600]/10 text-[#DF8600] dark:text-amber-400 p-2.5 rounded-lg border border-[#DF8600]/20">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Placement Support</h4>
                  <p className="text-sm font-bold">100% Dedicated Desk</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display border-b pb-2">Program Overview</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {course.longDescription}
            </p>
          </div>

          {/* Syllabus Accordion */}
          <div className="space-y-6">
            <div className="border-b pb-2">
              <h3 className="text-2xl font-bold font-display">Course Curriculum</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Explore the modules designed by our senior trainers to match commercial requirements.
              </p>
            </div>

            {course.syllabus && course.syllabus.length > 0 ? (
              <Accordion type="single" defaultValue="module-0" className="space-y-3">
                {course.syllabus.map((item, idx) => (
                  <AccordionItem key={idx} value={`module-${idx}`} className="border border-border/60 rounded-xl bg-card overflow-hidden">
                    <AccordionTrigger className="px-6 py-4.5 font-display font-bold text-sm tracking-tight">
                      {item.module}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-1 text-sm text-muted-foreground bg-muted/20 border-t">
                      <ul className="space-y-2">
                        {item.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-sm text-muted-foreground">Syllabus details are currently being finalized. Contact us to receive the PDF.</p>
            )}
          </div>

          {/* Certification Card */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl" />
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="bg-primary/10 text-primary w-11 h-11 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                <GraduationCap size={20} />
              </div>
              <h4 className="font-bold text-lg font-display">Industry-Recognized Certification</h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Upon successful completion of all conceptual lab evaluations and your major commercial portfolio project, Algorithm Tech issues a physical and secure digital completion certificate. You can embed this credential on LinkedIn to verify your competency to recruiters.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Right Side: Sticky Counseling Enquiry Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <Card className="bg-card/90 backdrop-blur-sm border border-border/80 shadow-lg relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 to-secondary/15 filter blur-2xl opacity-40 -z-10" />
              <CardContent className="p-6 space-y-6">
                <div className="space-y-1.5 text-center">
                  <h4 className="font-bold text-lg font-display tracking-tight text-foreground">Course Admission Desk</h4>
                  <p className="text-xs text-muted-foreground">Submit your details to block a counseling slot.</p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="mx-auto text-[#DF8600] w-12 h-12 animate-bounce" />
                    <h5 className="font-bold font-display text-sm">Enquiry Registered!</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Thank you! Our technical guide will call you on your mobile number to confirm batch options.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4.5">
                    <Input
                      label="Full Name"
                      name="name"
                      placeholder="E.g., Rahul Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                      className="bg-background h-10 text-xs"
                    />

                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="E.g., rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                      className="bg-background h-10 text-xs"
                    />

                    <Input
                      label="Mobile Number"
                      name="phone"
                      placeholder="E.g., +91 9881150150"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      error={errors.phone}
                      className="bg-background h-10 text-xs"
                    />

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Batch Preference</label>
                      <select
                        name="batch"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent cursor-pointer transition-all duration-200"
                      >
                        <option value="weekday-morning">Weekday Morning (09:00 AM - 11:30 AM)</option>
                        <option value="weekday-evening">Weekday Evening (06:30 PM - 09:00 PM)</option>
                        <option value="weekend-saturday">Weekend Saturday/Sunday (02:00 PM - 06:00 PM)</option>
                      </select>
                    </div>

                    <Button type="submit" variant="gradient" className="w-full gap-2 h-10 text-xs">
                      <Send size={14} /> Submit Study Enquiry
                    </Button>
                  </form>
                )}

              </CardContent>
            </Card>

            {/* Quick Support channels */}
            <div className="p-4 bg-muted/40 border rounded-xl space-y-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Direct Desk</h5>
              <div className="space-y-2 text-xs">
                <a href="tel:+918436963334" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} className="text-primary shrink-0" />
                  <span>+91 84369 63334</span>
                </a>
                <a href="mailto:admissions@algorithmtech.in" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} className="text-primary shrink-0" />
                  <span>admissions@algorithmtech.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. RELATED PROGRAMS */}
      <section className="bg-card/30 border-y py-16 mt-20">
        <Container className="space-y-12">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Alternative Syllabi
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display">Other Available Programs</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Browse other practical training sessions designed for career placement pivots.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((course) => (
              <div key={course.id}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  )
}
