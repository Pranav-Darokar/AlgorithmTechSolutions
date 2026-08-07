import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Sparkles, MapPin, Award, CheckCircle2, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import SectionTitle from '@/components/common/SectionTitle'

import instituteFront from '@/assets/campus/institute_front.jpg'
import classroomStudents from '@/assets/campus/classroom_students.jpg'
import classroomLecture from '@/assets/campus/classroom_lecture.jpg'
import placementFelicitation from '@/assets/campus/placement_felicitation.jpg'
import celebrationCake from '@/assets/campus/celebration_cake.jpg'
import mentorFelicitation from '@/assets/campus/mentor_felicitation.jpg'

const galleryItems = [
  {
    id: 'front',
    title: 'Offline Training Center',
    category: 'Campus',
    tag: 'Karve Nagar, Pune',
    image: instituteFront,
    desc: 'State-of-the-art corporate IT training infrastructure with dedicated lab setups.',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
    aspect: 'aspect-4/3'
  },
  {
    id: 'students',
    title: 'Practical Laboratory Sessions',
    category: 'Practical Labs',
    tag: 'Hands-on Coding',
    image: classroomStudents,
    desc: 'Students solving real-world coding problems with direct mentor assistance.',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'lecture',
    title: 'Interactive Smart Board Classes',
    category: 'Live Lectures',
    tag: 'Expert Mentorship',
    image: classroomLecture,
    desc: 'Low-level breakdown of complex algorithms and software engineering concepts.',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'felicitation',
    title: 'Placement Success & Felicitations',
    category: 'Achievements',
    tag: 'Career Pivot',
    image: placementFelicitation,
    desc: 'Celebrating student placement achievements with team felicitations.',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'cake',
    title: 'Batch Celebrations & Milestones',
    category: 'Culture',
    tag: 'Community',
    image: celebrationCake,
    desc: 'Fostering a supportive student community with milestone celebrations.',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'mentor-felicitation',
    title: 'Faculty Appreciation & Guidance',
    category: 'Mentorship',
    tag: 'Corporate Guidance',
    image: mentorFelicitation,
    desc: 'Special felicitation sessions honoring senior faculty and student mentors.',
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-4/3'
  }
]

export default function CampusGallery({ mode = 'grid' }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  const isMarquee = mode === 'marquee'
  const displayItems = isMarquee ? [...galleryItems, ...galleryItems] : galleryItems

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-[#0F172A]/40 to-transparent overflow-hidden">
      <Container className="space-y-8">
        <SectionTitle
          badge="Life @ AlgorithmTech"
          title="Inside Our Pune Training Center"
          subtitle="Explore our real classroom environment, hands-on lab sessions, and student placement celebrations."
        />
      </Container>

      {isMarquee ? (
        /* Infinite Moving Marquee for Home page */
        <div
          className="mt-8 relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-5 w-max"
            animate={isPaused ? {} : { x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedImage(item)}
                className="w-72 sm:w-96 shrink-0 group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#0F172A] dark:text-white border border-white/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-amber-500" /> {item.category}
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-1">
                    <span className="text-[11px] font-bold text-cyan-400 tracking-wider uppercase block">
                      {item.tag}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display tracking-tight leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 pt-0.5 font-normal opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        /* Standard Static Grid for About page */
        <Container className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#0F172A] dark:text-white border border-white/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-amber-500" /> {item.category}
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-1 transform group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[11px] font-bold text-cyan-400 tracking-wider uppercase block">
                      {item.tag}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display tracking-tight leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 pt-0.5 font-normal opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl space-y-0"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="relative max-h-[70vh] w-full bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>

                <div className="p-6 bg-slate-900 text-white space-y-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary border border-primary/30">
                      {selectedImage.category}
                    </span>
                    <span className="text-xs font-semibold text-cyan-400">
                      {selectedImage.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display">{selectedImage.title}</h3>
                  <p className="text-sm text-slate-300">{selectedImage.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  )
}
