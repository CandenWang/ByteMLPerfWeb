import React from 'react';
import { Image } from '@arco-design/web-react';

interface ImageItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface BlogImageProps {
  /** Single image source */
  src?: string;
  /** Single image alt text */
  alt?: string;
  /** Single image caption */
  caption?: string;
  /** Array of images for multi-image display */
  images?: ImageItem[];
  /** Layout direction for multiple images */
  layout?: 'row' | 'col';
}

const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  caption,
  images = [],
  layout = 'row',
}) => {
  // Normalize input to array of items
  const items = images.length > 0 ? images : src ? [{ src, alt, caption }] : [];

  if (items.length === 0) {
    return null;
  }

  // Determine container classes based on item count and layout
  const containerClasses =
    items.length > 1
      ? `flex gap-4 w-full justify-center items-start ${
          layout === 'col' ? 'flex-col items-center' : ' sm:flex-row'
        }`
      : 'flex justify-center w-full';

  // Determine item width classes
  const itemStyle =
    items.length > 1 && layout !== 'col'
      ? { flex: 1, minWidth: '0' } // allow shrinking/growing equally
      : {};

  const content = (
    <div className={containerClasses}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-full"
          style={itemStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={item.src}
            alt={item.alt || item.caption || `Image ${index + 1}`}
            width="100%"
            style={{
              maxWidth: '100%',
              maxHeight: '600px',
              objectFit: 'contain',
            }}
            className="rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
            previewProps={{
              visible: undefined,
              onVisibleChange: undefined,
            }}
          />
          {item.caption && (
            <span className="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center font-medium leading-tight max-w-[90%]">
              {item.caption}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="my-4 w-[80%]">
      {/* <Image.PreviewGroup> */}
      {content}
      {/* </Image.PreviewGroup> */}
    </div>
  );
};

export default BlogImage;
