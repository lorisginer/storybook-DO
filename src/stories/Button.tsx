import React, {useState} from 'react';
import './button.css';
import { FaCheck } from 'react-icons/fa';
import CSS from 'csstype';


export interface ButtonProps {

  primary?: boolean;
  
  backgroundColor?: string;

  size?: 'small' | 'medium' | 'large';

  label: string;

}
function visibleCSS(b : boolean) : CSS.Properties {
  return b
    ? {visibility: 'visible'}
    : {visibility: 'hidden'}
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  
  const [idVisible, setVisible] = useState(1);
  const [selected, setSelected] = useState(false)



  const state = {
      visibles: [
        visibleCSS(true),
        visibleCSS(false)
      ],
      id:idVisible
  }

  const onSelect = () => {
    if(!selected){setVisible(0);}
    else{setVisible(1);}
    setSelected(!selected)
    
  }
  
  return (
    <span
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
      onClick={onSelect}
    >
      {label}
     <span className="icon" style={state.visibles[state.id]}><FaCheck /></span> 
    </span>
  );
};
