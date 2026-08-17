import React, { useState } from 'react'
import { CheckCircle2, User, Mail, Phone, BookOpen, GraduationCap, Send, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { courses } from '@/data/courses'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'data-annotation',
    qualification: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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

    if (!formData.qualification.trim()) tempErrors.qualification = 'Qualification is required'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Registration Submitted:', formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'data-annotation',
        qualification: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-16 space-y-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-slate-800 rounded-full mb-4">
              <Rocket className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-4">
              Student <span className="gradient-text-primary">Registration</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ready to accelerate your IT career? Fill out the form below to enroll in our premium training programs and secure your seat.
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-card/60 backdrop-blur-md border border-slate-200/60 dark:border-border/60 shadow-xl overflow-hidden rounded-[24px]">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 p-6 md:p-8">
              <CardTitle className="text-2xl font-bold font-display text-slate-800 dark:text-slate-100">
                Enrollment Form
              </CardTitle>
              <CardDescription className="text-base">
                Provide your accurate details. Our admissions team will contact you for the next steps.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-16 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="text-[#25D366] w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">Registration Successful!</h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for choosing AlgorithmTech. Your registration has been received and our academic counselor will contact you shortly.
                  </p>
                  <div className="pt-4">
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-xl">
                      Submit Another Application
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-2">
                      Personal Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        icon={User}
                        placeholder="E.g., Rahul Patil"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        icon={Mail}
                        placeholder="E.g., rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        name="phone"
                        icon={Phone}
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                      />
                      
                      <div className="w-full space-y-1.5">
                        <label className="text-sm font-medium font-display text-foreground/80">
                          Highest Qualification
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 text-muted-foreground pointer-events-none">
                            <GraduationCap size={18} />
                          </div>
                          <select
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            className={`flex h-11 w-full rounded-lg border bg-background pl-11 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-200 ${errors.qualification ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                          >
                            <option value="">Select Qualification</option>
                            <option value="BE/BTech">BE / B.Tech</option>
                            <option value="BCA/MCA">BCA / MCA</option>
                            <option value="BSc/MSc">B.Sc / M.Sc</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        {errors.qualification && (
                          <p className="text-xs text-destructive font-medium">{errors.qualification}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-2">
                      Course Preference
                    </h4>
                    
                    <div className="w-full space-y-1.5">
                      <label className="text-sm font-medium font-display text-foreground/80">
                        Select Course
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-muted-foreground pointer-events-none">
                          <BookOpen size={18} />
                        </div>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="flex h-11 w-full rounded-lg border border-input bg-background pl-11 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-200"
                        >
                          {courses.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Textarea
                      label="Additional Message or Query (Optional)"
                      name="message"
                      placeholder="Let us know if you have any specific questions about the batch, timings, or syllabus..."
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      Submit Registration <Send size={18} className="ml-2" />
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
