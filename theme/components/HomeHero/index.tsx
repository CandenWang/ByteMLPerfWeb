import { useEffect, useRef, useState } from 'react';
import { Button } from 'rspress/theme';
import { normalizeHrefInRuntime } from 'rspress/runtime';
import { motion } from 'framer-motion';

export interface HeroAction {
  text: string;
  link: string;
  theme: 'brand' | 'alt';
}

export interface HeroSlide {
  name: string;
  text: string;
  chips: string[];
  actions: HeroAction[];
  background: string;
  alt?: string;
  tabLabel: string;
  num: number;
}

export interface Hero {
  slides: HeroSlide[];
  autoplayMs?: number;
}

export function HomeHero({ hero }: { hero: Hero }) {
  const slides = hero.slides ?? [];
  const intervalMs = hero.autoplayMs ?? 5000;
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, intervalMs);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active, intervalMs, slides.length]);

  const onTabClick = (idx: number) => {
    if (idx === active) return;
    setActive(idx);
  };

  return (
    <>
      <div className="relative h-[630px] rounded-[20px] overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#eef3ff_100%)] m-3 transform-gpu">
        <motion.div
          className="flex h-full will-change-transform"
          animate={{ x: `-${active * 100}%` }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
        >
          {slides.map((slide, index) => {
            const isActive = index === active;
            return (
              <div key={index} className="relative min-w-full h-full">
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={slide.background}
                    alt={slide.alt ?? slide.name}
                    className="absolute right-0 top-0 h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-[2] h-full flex flex-col justify-center px-12 gap-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    className="font-bold text-[36px] text-[var(--rp-c-text-1)]"
                  >
                    <span className="">{slide.name}</span>
                    <span className="font-thin text-[var(--rp-c-text-1)]">
                      ｜{slide.text}
                    </span>
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                    className="flex gap-[10px] flex-wrap"
                  >
                    {slide.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-base text-[#0B0B0F] border border-[#D7DAEA] rounded-[4px] px-3 py-[3px] bg-white/60"
                      >
                        {chip}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                    className="flex gap-3 mt-1.5"
                  >
                    {slide.actions.map((action) => (
                      <Button
                        key={action.link}
                        type="a"
                        text={action.text}
                        href={normalizeHrefInRuntime(action.link)}
                        theme={action.theme}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="absolute bottom-4 left-6 right-6 flex justify-end items-center z-10">
          <div className="flex relative pb-[14px]">
            {slides.map((sl, i) => (
              <button
                type="button"
                key={sl.tabLabel + i}
                className={`bg-transparent border-none text-lg inline-flex flex-col items-start gap-2 p-0 ${
                  i === active
                    ? 'text-[#0f172a] font-semibold'
                    : 'text-white/80'
                }`}
                onClick={() => onTabClick(i)}
              >
                <div className="flex items-center mx-4 gap-1 hover:text-[#0f172a]">
                  <span
                    className={`w-[30px] text-[20px] ${
                      sl.num > 10
                        ? "after:content-['+'] after:font-bold after:text-sm"
                        : ''
                    }`}
                  >
                    {sl.num > 10 ? '10' : '0' + sl.num}
                  </span>
                  <span className="leading-[22px] text-[13px] font-bold">
                    {sl.tabLabel}
                  </span>
                </div>
                <span className="w-full h-[3px] bg-black/10">
                  {i === active && (
                    <motion.span
                      key={active}
                      className="block h-full bg-[#121212] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: intervalMs / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
