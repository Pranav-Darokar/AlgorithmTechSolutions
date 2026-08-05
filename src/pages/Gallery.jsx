import React, { useState, useMemo } from 'react'
import { Filter, Eye, Image as ImageIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import SectionTitle from '@/components/common/SectionTitle'
import { galleryItems } from '@/data/gallery'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  // Available categories list
  const filters = ['All', 'Classrooms', 'Workshops', 'Events', 'Placement Drives', 'Certifications']

  // Filter logic
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems
    return galleryItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase())
  }, [activeFilter])

  return (
    <div className="py-16 space-y-12">
      
      {/* Page Header */}
      <Container>
        <SectionTitle
          badge="Campus Life"
          title="Explore Our Photo Gallery"
          subtitle="A visual tour of our campus laboratories, coding workshops, events, student award days, and placement campaigns."
        />
      </Container>

      {/* Filter Options */}
      <section className="bg-card/40 border-y py-6 backdrop-blur-sm">
        <Container className="flex flex-wrap gap-2 items-center justify-center">
          <span className="text-xs font-semibold text-muted-foreground mr-2 flex items-center gap-1">
            <Filter size={12} /> Category:
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "bg-background border-border hover:bg-muted text-muted-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </Container>
      </section>

      {/* Gallery Grid */}
      <section>
        <Container>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-72 rounded-2xl border border-border/60 overflow-hidden bg-card/60 backdrop-blur-sm shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay detail panel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-white text-lg font-bold font-display tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  {/* Quick Preview Badge */}
                  <div className="absolute right-4 top-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={14} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <ImageIcon className="mx-auto text-muted-foreground w-16 h-16" />
              <h3 className="text-xl font-bold">No Photos Found</h3>
              <p className="text-sm text-muted-foreground">We couldn't find any images in this category folder yet.</p>
            </div>
          )}
        </Container>
      </section>

    </div>
  )
}
