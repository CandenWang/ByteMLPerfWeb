import { motion } from 'framer-motion';
import { FC } from 'react';

const vendors = [
  { src: '/usedby/graphcore.png', href: 'https://www.graphcore.ai/' },
  { src: '/usedby/habana.png', href: 'https://habana.ai/' },
  { src: '/usedby/moffett.png', href: 'https://moffett.ai/' },
  { src: '/usedby/stream.png', href: 'https://www.streamcomputing.com/' },
];

export const Contributors: FC = () => (
  <>
    <div className="flex flex-col my-[120px] items-start overflow-x-auto">
      <h2 className="text-3xl font-bold">Supporting Vendors</h2>
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
    <div className="flex flex-col mb-[120px] items-start overflow-x-auto">
      <h2 className="text-3xl font-bold mb-10">Contributors</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="https://github.com/bytedance/ByteMLPerf/graphs/contributors">
          <img src="https://contrib.rocks/image?repo=bytedance/ByteMLPerf" />
        </a>
      </motion.div>
    </div>
  </>
);
