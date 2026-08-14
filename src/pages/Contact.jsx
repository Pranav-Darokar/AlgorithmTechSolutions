import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'
import SEO from '@/components/common/SEO'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'data-annotation',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Validate form
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

    if (!formData.message.trim()) tempErrors.message = 'Please input a message'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulate API submit
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'data-annotation',
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

  const contactDetails = [
    {
      title: "Our Address",
      desc: "AlgorithmTech Corporate Training Institute, Near Cummins Engineering College, Karve Nagar, Lane 1, Opposite Pentagon Tower, Pune",
      icon: MapPin,
    },
    {
      title: "Direct Hotlines",
      desc: "+91 84369 63334",
      icon: Phone,
    },
    {
      title: "Email Support",
      desc: "admissions@algorithmtech.in",
      descSecondary: "support@algorithmtech.in",
      icon: Mail,
    },
    {
      title: "Counseling Hours",
      desc: "Monday - Sunday: 09:00 AM - 10:00 PM",
      icon: Clock,
    }
  ]

  return (
    <div className="py-16 space-y-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with AlgorithmTech Solutions. Visit our Pune campus or contact us online for course admissions and inquiries."
      />
      
      {/* Intro Header */}
      <Container>
        <SectionTitle
          badge="Admissions Desk"
          title="We're Here to Guide You"
          subtitle="Get in touch with our career counselors to schedule a demo lab session, select a batch slot, or clear syllabus questions."
        />
      </Container>

      {/* Main Form & Info Grid */}
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactDetails.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="bg-card/60 backdrop-blur-sm border border-border/50">
                    <CardContent className="p-6 flex gap-4">
                      <div className="bg-primary/10 text-primary w-11 h-11 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                        <Icon size={20} className="stroke-[2]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm font-display text-foreground">{item.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        {item.descSecondary && (
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.descSecondary}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick WhatsApp chat prompt */}
            <div className="p-6 bg-blue-500/10 border border-blue-500/25 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h5 className="font-bold font-display text-[#19426C] dark:text-amber-400 text-sm">Need Instant Support?</h5>
                <p className="text-xs text-muted-foreground">Chat with our counseling leads on WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/918436963334?text=Hi%2C%20I'm%20interested%20in%20IT%20Training%20courses%20at%20Algorithm%20Tech."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#20ba5a] text-white gap-1.5 h-9 text-xs">
                  <MessageSquare size={14} /> WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-card/60 backdrop-blur-sm border border-border/60">
              <CardContent className="p-8">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="mx-auto text-[#DF8600] w-16 h-16 animate-bounce" />
                    <h3 className="text-2xl font-bold font-display">Message Sent Successfully!</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us! Our counselor will review your selection and reach out on your mobile number within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        placeholder="E.g., Rahul Patil"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
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
                        placeholder="E.g., +91 9881150150"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                      />
                      
                      {/* Course Selection dropdown */}
                      <div className="space-y-1.5 w-full">
                        <label className="text-sm font-medium font-display text-foreground/80">
                          Course of Interest
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent cursor-pointer transition-all duration-200"
                        >
                          <option value="data-annotation">Data Annotation</option>
                          <option value="prompt-engineering">Prompt Engineering</option>
                          <option value="software-testing">Software Testing</option>
                          <option value="app-development">App Development</option>
                          <option value="labview">LabVIEW Training</option>
                        </select>
                      </div>
                    </div>

                    <Textarea
                      label="Your Message"
                      name="message"
                      placeholder="Type details about your batch preferences or tech background..."
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                    />

                    <Button type="submit" variant="gradient" className="w-full gap-2">
                      <Send size={16} /> Send Message
                    </Button>
                  </form>
                )}

              </CardContent>
            </Card>
          </div>

        </Container>
      </section>

      {/* Google Map Mock Placeholder */}
      <section>
        <Container className="space-y-6">
          <SectionTitle
            badge="Locate Us"
            title="Visit Our Training Campus"
            align="center"
          />

          <Card className="overflow-hidden border border-border/60 shadow-lg relative group h-[450px]">
            {/* Live Google Map iframe */}
            <iframe
              title="AlgorithmTech Location Map"
              src="https://maps.google.com/maps?q=18.485034,73.8158793&z=17&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map info overlay card */}
            <div className="absolute bottom-6 left-6 z-10 p-5 glass-card rounded-2xl max-w-sm shadow-xl border border-border/60">
              <h4 className="font-bold text-base font-display flex items-center gap-2 text-foreground">
                <MapPin size={18} className="text-primary shrink-0" /> AlgorithmTech Campus
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                AlgorithmTech Corporate Training Institute, Near Cummins Engineering College, Karve Nagar, Lane 1, Opposite Pentagon Tower, Pune
              </p>
              <a
                href="https://www.google.com/maps/place/18%C2%B029'06.1%22N+73%C2%B048'57.2%22E/@18.485034,73.8133044,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.485034!4d73.8158793?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3"
              >
                <Button variant="gradient" size="sm">
                  Open in Google Maps
                </Button>
              </a>
            </div>
          </Card>
        </Container>
      </section>

    </div>
  )
}
