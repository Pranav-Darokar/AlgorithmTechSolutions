import React from 'react'
import { MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { successStories } from '@/data/placements'

export default function SuccessStoriesMarquee({ singleRow = false }) {
  const halfIndex = Math.ceil(successStories.length / 2);
  const row1Stories = singleRow ? successStories : successStories.slice(0, halfIndex);
  const row2Stories = singleRow ? [] : successStories.slice(halfIndex);

  const getDisplayStories = (stories) => {
    if (stories.length === 0) return [];
    if (stories.length < 5) return [...stories, ...stories, ...stories, ...stories, ...stories];
    return stories;
  };

  const displayRow1 = getDisplayStories(row1Stories);
  const displayRow2 = getDisplayStories(row2Stories);

  const renderCard = (story) => (
    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      {/* Square Photo */}
      <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
        <img
          src={story.photo}
          alt={story.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Details */}
      <CardContent className="p-5 flex flex-col items-center text-center flex-grow">
        <div className="flex-grow w-full flex flex-col items-center justify-start space-y-3">
          <div className="space-y-1 w-full">
            <h5 className="font-display font-bold text-[17px] text-slate-900 dark:text-slate-100 leading-tight">
              {story.name}
            </h5>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {story.city ? story.city : story.company}
            </div>
          </div>
          <div className="w-full pb-2">
            <span className="inline-block text-[11px] font-semibold px-2.5 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50">
              {story.course}
            </span>
          </div>
        </div>
        <div className="w-full pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
          <div className="text-base font-extrabold text-[#DF8600] dark:text-amber-500">
            {story.package}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden group w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
      {successStories.length === 0 ? (
        <div className="w-full text-center text-muted-foreground py-10">No students found.</div>
      ) : (
        <>
          {/* Row 1 (Normal Scroll) */}
          {displayRow1.length > 0 && (
            <div className="flex gap-6 w-full">
              {[0, 1].map((arrIndex) => (
                <div key={`r1-${arrIndex}`} className={`flex animate-marquee shrink-0 gap-6 min-w-full items-stretch ${arrIndex === 1 ? 'hidden sm:flex' : ''}`} style={singleRow ? { animationDuration: '70s' } : undefined} aria-hidden={arrIndex === 1}>
                  {displayRow1.map((story, i) => (
                    <div key={`${story.id}-r1-${arrIndex}-${i}`} className="w-[220px] md:w-[250px] shrink-0">
                      {renderCard(story)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Row 2 (Reverse Scroll Seamless) */}
          {displayRow2.length > 0 && (
            <div className="flex animate-marquee-reverse-seamless shrink-0 gap-6 items-stretch w-max" style={singleRow ? { animationDuration: '70s' } : undefined}>
              {[0, 1].map((arrIndex) => (
                <React.Fragment key={`r2-frag-${arrIndex}`}>
                  {displayRow2.map((story, i) => (
                    <div key={`${story.id}-r2-${arrIndex}-${i}`} className="w-[220px] md:w-[250px] shrink-0">
                      {renderCard(story)}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
