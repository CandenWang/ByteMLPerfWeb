import React from 'react';
import { Alert } from '@arco-design/web-react';
import {
  IconPushpin,
  IconTrophy,
  IconInfoCircle,
} from '@arco-design/web-react/icon';

const iconMap: Record<string, React.ReactNode> = {
  pushpin: <IconPushpin />,
  apple: <IconPushpin />,
  trophy: <IconTrophy />,
};

const typeMap: Record<string, 'info' | 'success' | 'warning' | 'error'> = {
  pushpin: 'info',
  apple: 'warning',
  trophy: 'success',
};

export interface CalloutProps {
  icon?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  children?: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ icon, type = 'info', children }) => {
  const iconNode = icon && iconMap[icon] ? iconMap[icon] : <IconInfoCircle />;
  const alertType = icon && typeMap[icon] ? typeMap[icon] : type;

  return (
    <Alert
      icon={iconNode}
      type={alertType}
      content={<div>{children}</div>}
      style={{ margin: '12px 0' }}
    />
  );
};

export default Callout;
