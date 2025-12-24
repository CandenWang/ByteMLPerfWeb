import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const DescriptionWithTooltip = ({ text }: { text: string }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 使用 setTimeout 确保在布局渲染完成后进行检测
    const checkOverflow = () => {
      if (textRef.current) {
        // 增加 1px 的容差，防止浮点数计算导致的误判
        setIsOverflowing(
          textRef.current.scrollHeight > textRef.current.clientHeight + 1
        );
      }
    };

    const timer = setTimeout(checkOverflow, 100);
    // 监听窗口大小变化，重新检测
    window.addEventListener('resize', checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [text]);

  return (
    <div className="relative mb-4 h-[46px]">
      <p
        ref={textRef}
        data-tooltip-id={isOverflowing ? 'article-desc-tooltip' : undefined}
        data-tooltip-content={text}
        className="text-gray-500 text-sm leading-relaxed overflow-hidden outline-none"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export interface ArticleItem {
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface ArticleSection {
  title: string;
  desc: string;
  items: ArticleItem[];
}

function ArticleCarousel({ section }: { section: ArticleSection }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { title, desc, items } = section;
  const features = items || [];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.firstElementChild as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth : 591;
      const gap = 24; // gap-6 = 24px
      const scrollAmount =
        direction === 'left' ? -(cardWidth + gap) * 2 : (cardWidth + gap) * 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8 px-4 xl:px-10 min-[1680px]:px-[120px]">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 md:flex">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.93949 9.16598C1.74423 9.36124 1.74423 9.67782 1.93949 9.87308L6.75192 14.6855C6.94718 14.8808 7.26376 14.8808 7.45902 14.6855L8.16598 13.9786C8.36124 13.7833 8.36124 13.4667 8.16598 13.2714L5.41406 10.5195H17.5C17.7761 10.5195 18 10.2957 18 10.0195V9.01953C18 8.74339 17.7761 8.51953 17.5 8.51953H5.41406L8.16598 5.76762C8.36124 5.57235 8.36124 5.25577 8.16598 5.06051L7.45902 4.35355C7.26376 4.15829 6.94718 4.15829 6.75192 4.35355L1.93949 9.16598Z"
                fill="#0B0B0F"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0605 9.16598C18.2558 9.36124 18.2558 9.67782 18.0605 9.87308L13.2481 14.6855C13.0528 14.8808 12.7362 14.8808 12.541 14.6855L11.834 13.9786C11.6388 13.7833 11.6388 13.4667 11.834 13.2714L14.5859 10.5195H2.5C2.22386 10.5195 2 10.2957 2 10.0195V9.01953C2 8.74339 2.22386 8.51953 2.5 8.51953H14.5859L11.834 5.76762C11.6388 5.57235 11.6388 5.25577 11.834 5.06051L12.541 4.35355C12.7362 4.15829 13.0528 4.15829 13.2481 4.35355L18.0605 9.16598Z"
                fill="#0B0B0F"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto md:overflow-hidden pb-8 hide-scrollbar overscroll-x-contain"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex flex-col justify-center items-center self-stretch w-[320px] xl:w-[591px] min-[1680px]:w-[711px] min-[1920px]:w-[831px] flex-shrink-0 bg-white overflow-hidden group cursor-pointer ${
              index === 0 ? 'ml-4 xl:ml-10 min-[1680px]:ml-[120px]' : ''
            } ${
              index === features.length - 1
                ? 'mr-4 xl:mr-10 min-[1680px]:mr-[120px]'
                : ''
            }`}
            onClick={() => (window.location.href = feature.link)}
          >
            <div className="w-full h-[180px] xl:h-[332px] min-[1680px]:h-[399px] min-[1920px]:h-[467px] overflow-hidden bg-gray-100 rounded-[4px]">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-6 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                {feature.title}
              </h3>
              <DescriptionWithTooltip text={feature.desc} />
              <div className="flex items-center text-sm font-normal leading-[22px] tracking-[0.042px] transition-all text-[#0B0B0F] group-hover:text-[#5252FF] group-hover:underline group-hover:decoration-[#5252FF] [text-underline-position:from-font] gap-1 group-hover:gap-1.5">
                <span>展示该成果最新文章</span>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.34082 0.160894C9.52812 -0.0420163 9.84494 -0.0547281 10.0479 0.132574L13.8393 3.63236C14.0538 3.83034 14.0538 4.16918 13.8393 4.36716L10.0479 7.86695C9.84494 8.05425 9.52812 8.04154 9.34082 7.83863C9.15376 7.63576 9.16643 7.31983 9.36914 7.13257L12.2217 4.49976H0.5C0.223858 4.49976 0 4.2759 0 3.99976C0 3.72362 0.223858 3.49976 0.5 3.49976H12.2217L9.36914 0.866949C9.16643 0.679694 9.15376 0.363767 9.34082 0.160894Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HomeArticle({ sections }: { sections: ArticleSection[] }) {
  const list = sections || [];
  return (
    <div className="w-full pt-[120px]">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {list.map((section, idx) => (
        <div key={idx} className={idx > 0 ? 'mt-[120px]' : ''}>
          <ArticleCarousel section={section} />
        </div>
      ))}
      <ReactTooltip
        id="article-desc-tooltip"
        place="top"
        style={{ maxWidth: '400px', zIndex: 50, fontSize: '12px' }}
      />
    </div>
  );
}
