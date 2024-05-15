import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { flavourOptions } from './selectData';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[flavourOptions[1]]}
      isMulti
      options={flavourOptions}
    />
  );
}