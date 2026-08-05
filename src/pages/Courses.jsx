import React, { useState, useMemo } from 'react'
import { Search, Filter, HelpCircle, XCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import SectionTitle from '@/components/common/SectionTitle'
import CourseCard from '@/components/common/CourseCard'
import { courses } from '@/data/courses'

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeLevel, setActiveLevel] = useState('All')

  // Categories list extracted from mock data learning modes
  const categories = ['All', 'Hybrid', 'Online', 'Offline']
  const levels = ['All', 'Beginner Friendly', 'Intermediate', 'All Levels']

  // Filter logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = 
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.longDescription.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = 
        activeCategory === 'All' || 
        course.learningMode.toLowerCase().includes(activeCategory.toLowerCase())

      const matchesLevel = 
        activeLevel === 'All' || 
        course.skillLevel.toLowerCase().includes(activeLevel.toLowerCase())

      return matchesSearch && matchesCategory && matchesLevel
    })
  }, [searchQuery, activeCategory, activeLevel])

  return (
    <div className="py-16 space-y-12">
      
      {/* Header Title */}
      <Container>
        <SectionTitle
          badge="IT Training Programs"
          title="Browse Our High-Value Courses"
          subtitle="Acquire verified practical skills in Artificial Intelligence operations, software test automation, app developments, and LabVIEW graphical systems."
        />
      </Container>

      {/* Search & Filter Section */}
      <section className="bg-card/40 border-y py-8 backdrop-blur-sm">
        <Container className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input Box */}
            <div className="md:col-span-6">
              <Input
                placeholder="Search courses by name or technology keywords..."
                icon={Search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background"
              />
            </div>

            {/* Clear Button */}
            {(searchQuery || activeCategory !== 'All' || activeLevel !== 'All') && (
              <div className="md:col-span-2 text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('All')
                    setActiveLevel('All')
                  }}
                  className="text-xs text-muted-foreground gap-1.5 hover:text-primary"
                >
                  <XCircle size={14} /> Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Filter Categories */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-muted-foreground mr-2 flex items-center gap-1">
                <Filter size={12} /> Mode:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "bg-background border-border hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-muted-foreground mr-2 flex items-center gap-1">
                <Filter size={12} /> Level:
              </span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setActiveLevel(lvl)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    activeLevel === lvl
                      ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "bg-background border-border hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Courses Display Grid */}
      <section>
        <Container>
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
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
