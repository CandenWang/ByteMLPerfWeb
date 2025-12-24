import { Hero, HomeHero } from '../components/HomeHero';
import { HomeArticle, ArticleSection } from '../components/HomeArticle';
import { usePageData } from 'rspress/runtime';
import { HomeFooter } from '../components/HomeFooter/index';
import { Contributors } from '../components/Contributors';

export function HomeLayout() {
  const { page } = usePageData();
  const {
    frontmatter: { hero, articles },
  } = page;
  return (
    <div>
      <div
        className="relative transform-gpu will-change-transform"
        style={{
          background: 'var(--rp-home-bg)',
          // minHeight: 'calc(80rem - var(--rp-nav-height))',
        }}
      >
        <HomeHero hero={hero as Hero} />
        <HomeArticle sections={articles as ArticleSection[]} />
      </div>
      <div className="px-4 xl:px-10 min-[1680px]:px-[120px]">
        <Contributors />
      </div>
      <HomeFooter />
    </div>
  );
}
