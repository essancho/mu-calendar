import React from 'react';
import { Select } from 'antd';

interface Props {
  season: string;
  options: string[];
  setSeason: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBlock: React.FC<Props> = ({ season, options, setSeason }) => {
  return (
    <div>
      <Select
        value={season}
        onChange={(e) => setSeason(e)}
        style={{ width: 120 }}
        defaultValue={options[0]}
      >
        {options.map((item) => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FilterBlock;
