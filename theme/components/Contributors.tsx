import { motion } from 'framer-motion';
import { FC } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import contributorsData from './contributors.json';
import { useI18n } from '../i18n';

const vendors = [
  { src: '/usedby/graphcore.png', href: 'https://www.graphcore.ai/' },
  { src: '/usedby/habana.png', href: 'https://habana.ai/' },
  { src: '/usedby/moffett.png', href: 'https://moffett.ai/' },
  { src: '/usedby/stream.png', href: 'https://www.streamcomputing.com/' },
];

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const ContributorList = () => {
  const contributors = contributorsData as Contributor[];

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {contributors.map((contributor) => (
          <a
            key={contributor.login}
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="contributor-tooltip"
            data-tooltip-content={contributor.login}
            className="transition-all hover:scale-110 relative hover:z-10"
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-12 h-12 rounded-full border border-gray-200"
            />
          </a>
        ))}
      </div>
      <Tooltip
        id="contributor-tooltip"
        place="top"
        style={{ zIndex: 50, fontSize: '12px', padding: '4px 8px' }}
      />
    </>
  );
};

export const Contributors: FC = () => {
  const t = useI18n();
  return (
    <>
      <div className="flex flex-col my-[120px] items-start overflow-x-auto">
        <h2 className="text-3xl font-bold">{t('supportingVendors')}</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex mt-10 justify-start items-center flex-wrap">
            {vendors.map((vendor, index) => (
              <a
                key={index}
                href={vendor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="m-4"
              >
                <img
                  src={vendor.src}
                  alt={`Vendor ${index + 1}`}
                  style={{ width: '150px', height: 'auto' }}
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col mb-[120px] items-start">
        <h2 className="text-3xl font-bold mb-10">{t('contributors')}</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContributorList />
        </motion.div>
      </div>
    </>
  );
};
