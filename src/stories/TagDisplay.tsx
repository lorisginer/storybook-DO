import React, {useState} from 'react';
import './button.css';
import { FaCheck } from 'react-icons/fa';
import CSS from 'csstype';

function visibleCSS(b : boolean) : CSS.Properties {
  return b
    ? {visibility: 'visible'}
    : {visibility: 'hidden'}
}

export type TagDisplayProps = {
  color : string,
  label: string,
  visible: boolean,
  primary?: boolean,
  size?: 'small' | 'medium' | 'large',
  onSelect: React.MouseEventHandler<HTMLSpanElement>,
}
export const TagDisplay: React.FC<TagDisplayProps> = (props) => {
  const {
    color,
    label,
    visible,
    primary,
    size,
    onSelect,
  } = props;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <span
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ color }}
        {...props}
        onClick={onSelect}
      >
        {label}
      <span className="icon" style={visibleCSS(visible)}><FaCheck /></span> 
      </span>
  );
}