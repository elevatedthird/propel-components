import React from 'react';
import useComputedStyle from './hooks/useComputedStyle';

function Swatch({ bgColor }) {
  const { rules, ComputedStyleEl } = useComputedStyle('div', ['background-color']);
  return (
    <div>
      <ComputedStyleEl className={`${bgColor} w-full h-[100px]`}/>
      <small> Class: {bgColor} | Hex: {rules['background-color']} </small>
    </div>
  );
}

export default function Colors() {
  const colors = [
    'bg-orange',
    'bg-navy',
    'bg-gray',
    'bg-blue'
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {colors.map((color, index) => <Swatch key={index} bgColor={color} /> )}
    </div>
  );
}