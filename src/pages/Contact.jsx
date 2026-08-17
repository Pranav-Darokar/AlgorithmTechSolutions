import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion'
import SectionTitle from '@/components/common/SectionTitle'
import SEO from '@/components/common/SEO'
import { faqs } from '@/data/faq'

export default function Contact() {
  const contactDetails = [
    {
      title: "Our Address",
      desc: "AlgorithmTech Corporate Training Institute, Near Cummins Engineering College, Karve Nagar, Lane 1, Opposite Pentagon Tower, Pune",
      icon: MapPin,
    },
    {
      title: "Direct Hotlines",
      desc: "+91 76662 24323, +91 84369 63334",
      icon: Phone,
    },
    {
      title: "Email Support",
      desc: "contact@algoitsolutions.com",
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
      
      {/* Contact Layout: Info + Form */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              <SectionTitle
                badge="Admissions Desk"
                title="We're Here to Guide You"
                subtitle="Get in touch with our career counselors to schedule a demo lab session, select a batch slot, or clear syllabus questions."
                align="left"
                className="mx-0"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.title} className="bg-card/60 backdrop-blur-sm border border-border/50">
                      <CardContent className="p-5 flex flex-col items-start gap-3 h-full">
                        <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                          <Icon size={20} className="stroke-[2]" />
                        </div>
                        <div className="space-y-1 text-left">
                          <h4 className="font-bold text-sm font-display text-foreground">{item.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                          {item.descSecondary && (
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.descSecondary}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick WhatsApp chat prompt */}
              <div className="p-6 bg-blue-500/10 border border-blue-500/25 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="space-y-1">
                  <h5 className="font-bold font-display text-[#19426C] dark:text-amber-400 text-base">Need Instant Support?</h5>
                  <p className="text-sm text-muted-foreground">Chat with our counseling leads directly.</p>
                </div>
                <a
                  href="https://wa.me/918436963334?text=Hi%2C%20I'm%20interested%20in%20IT%20Training%20courses%20at%20Algorithm%20Tech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shrink-0"
                >
                  <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white gap-2 h-11 px-5">
                    <MessageSquare size={16} /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="space-y-8">
              <SectionTitle
                badge="Get in Touch"
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you within 24 hours."
                align="left"
                className="mx-0"
              />
              <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! We will contact you soon.'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="name" className="text-xs font-medium text-foreground">Full Name</label>
                        <input type="text" id="name" placeholder="John Doe" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="email" className="text-xs font-medium text-foreground">Email Address</label>
                        <input type="email" id="email" placeholder="john@example.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="phone" className="text-xs font-medium text-foreground">Phone Number</label>
                        <input type="tel" id="phone" placeholder="+91 98765 43210" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="course" className="text-xs font-medium text-foreground">Interested Course</label>
                        <select id="course" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required>
                          <option value="">Select a course...</option>
                          <option value="data-annotation">Data Annotation</option>
                          <option value="prompt-engineering">Prompt Engineering</option>
                          <option value="software-testing">Software Testing</option>
                          <option value="python">Python Programming</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="message" className="text-xs font-medium text-foreground">Your Message</label>
                      <textarea id="message" placeholder="How can we help you?" className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required></textarea>
                    </div>
                    <Button type="submit" variant="gradient" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </Container>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="py-8 md:py-12 bg-slate-50/50 dark:bg-transparent border-y">
        <Container className="max-w-4xl space-y-8">
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Have Questions? We Have Answers"
            subtitle="Find quick info about class timings, offline labs, placements, and syllabus details."
            align="center"
          />

          <Accordion type="single" defaultValue="faq-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* Google Map Mock Placeholder */}
      <section>
        <Container className="max-w-4xl space-y-6">
          <SectionTitle
            badge="Locate Us"
            title="Visit Our Training Campus"
            align="center"
          />

          <Card className="overflow-hidden border border-border/60 shadow-lg relative group h-[350px]">
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
