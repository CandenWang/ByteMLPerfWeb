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
  const items = images.length > 0 ? images : src ? [{ src, alt, caption }] : [];

  if (items.length === 0) {
    return null;
  }

  const containerClasses =
    items.length > 1
      ? `flex gap-4 w-full justify-center items-start ${
          layout === 'col' ? 'flex-col items-center' : 'flex-col sm:flex-row'
        }`
      : 'flex justify-center w-full';

  const itemStyle =
    items.length > 1 && layout !== 'col' ? { flex: 1, minWidth: '0' } : {};

  const content = (
    <div className={containerClasses}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-full gap-2"
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
            <div className="text-sm text-gray-500 text-center max-w-[90%]">
              {item.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="my-8 w-full">
      <style>{`
        .arco-image-preview-mask {
          background-color: rgba(0, 0, 0, 0.6) !important;
        }
        .arco-image-preview-wrapper {
          z-index: 10000 !important;
        }
        .arco-image-preview-img {
          background-color: white !important;
        }
      `}</style>
      <Image.PreviewGroup>{content}</Image.PreviewGroup>
    </div>
  );
};

export default BlogImage;
