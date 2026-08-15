import React from 'react'
import { HelpCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import SectionTitle from '@/components/common/SectionTitle'
import CourseCard from '@/components/common/CourseCard'
import SEO from '@/components/common/SEO'
import { courses } from '@/data/courses'

export default function Courses() {
  return (
    <div className="py-16 space-y-12">
      <SEO 
        title="Our Courses" 
        description="Browse high-value IT training courses in Software Testing, Full Stack Development, AI, and Agentic AI at AlgorithmTech."
      />
      
      {/* Header Title */}
      <Container>
        <SectionTitle
          badge="IT Training Programs"
          title="Browse Our High-Value Courses"
          subtitle="Acquire verified practical skills in Artificial Intelligence operations, software test automation, app developments, and LabVIEW graphical systems."
        />
      </Container>


      {/* Courses Display Grid */}
      <section>
        <Container>
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <HelpCircle className="mx-auto text-muted-foreground w-16 h-16 animate-bounce" />
              <h3 className="text-2xl font-bold font-display">No Courses Match Your Filters</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                We couldn't find any courses matching your search terms or filter constraints. Try clearing filters or searching for alternative tech keywords.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                  setActiveLevel('All')
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </Container>
      </section>

    </div>
  )
}
