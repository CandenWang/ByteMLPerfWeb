import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Spin, Message } from '@arco-design/web-react';
import { IconDownload, IconClose, IconFile } from '@arco-design/web-react/icon';

export interface FileCardProps {
  title: string;
  filePath: string;
  fileName?: string;
  displayMode?: 'card' | 'text';
}

const FileCard: React.FC<FileCardProps> = ({
  title,
  filePath,
  fileName = '',
  displayMode = 'card',
}) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  const loadFileContent = async () => {
    setLoading(true);
    try {
      const response = await fetch(filePath, {
        headers: {
          Accept: '*/*',
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response content:', errorText.slice(0, 500));
        throw new Error(
          `Failed to load file: ${response.status} ${response.statusText}`
        );
      }
      const text = await response.text();
      if (
        text.trim().startsWith('<!DOCTYPE') ||
        text.trim().startsWith('<html')
      ) {
        throw new Error(
          'Server returned HTML instead of the requested file. Please check the file path.'
        );
      }
      setContent(text);
      Message.success('File loaded successfully');
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    loadFileContent();
    setVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleDownload = async () => {
    try {
      if (!filePath) {
        throw new Error('File path is empty');
      }
      const downloadFilename = fileName || filePath.split('/').pop() || 'file';
      const link = document.createElement('a');

      if (filePath.startsWith('http')) {
        const response = await fetch(filePath, {
          mode: 'cors',
          headers: {
            Accept: '*/*',
          },
        });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch file: ${response.status} ${response.statusText}`
          );
        }
        const blob = await response.blob();
        link.href = URL.createObjectURL(blob);
        link.download = downloadFilename;
        link.onclick = () => {
          setTimeout(() => {
            URL.revokeObjectURL(link.href);
          }, 100);
        };
      } else {
        link.href = filePath;
        link.download = downloadFilename;
      }
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch {}
  };

  return (
    <>
      {displayMode === 'card' ? (
        <div
          onClick={handleCardClick}
          className="cursor-pointer transition-all duration-200 my-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md bg-white p-4 flex items-center gap-3"
        >
          <IconFile
            className="text-blue-600 text-xl flex-shrink-0"
            style={{ fontSize: '20px' }}
          />
          <h5 className="m-0 font-medium text-gray-800 text-base">{title}</h5>
        </div>
      ) : (
        <span
          onClick={handleCardClick}
          className="cursor-pointer text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
        >
          <IconFile />
          {title}
        </span>
      )}

      {visible &&
        ReactDOM.createPortal(
          <div
            ref={fullscreenRef}
            className="fixed top-0 left-0 w-screen h-screen bg-white z-[999999] flex flex-col m-0 p-0 overflow-hidden"
            style={{ animation: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-[100] shadow-sm">
              <h4 className="m-0 font-semibold text-gray-800 text-lg">
                {title}
              </h4>
              <div className="flex gap-3 items-center">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm border-none cursor-pointer"
                >
                  <IconDownload /> Download
                </button>
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm border-none cursor-pointer"
                >
                  <IconClose /> Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <Spin size={40} style={{ color: '#165dff' }} />
                </div>
              ) : (
                <pre className="bg-white p-6 rounded-xl overflow-auto shadow-sm border border-gray-200 text-sm leading-relaxed whitespace-pre-wrap break-all max-h-[calc(100vh-120px)] font-mono text-gray-800">
                  <code className="text-gray-800">
                    {(() => {
                      try {
                        const parsed = JSON.parse(content);
                        return JSON.stringify(parsed, null, 2);
                      } catch (e) {
                        return content;
                      }
                    })()}
                  </code>
                </pre>
              )}
            </div>
          </div>,
          document.body
        )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default FileCard;
