import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BranchFilter } from './BranchFilter';
import CheckObject from '../../utils/objects/CheckObject';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/BranchFilter',
  component: BranchFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    prices: {
      table: {
        disable: true
      }
    },
    setPrices: {
      table: {
        disable: true
      }
    },
    startHour: {
      table: {
        disable: true
      }
    },
    setStartHour: {
      table: {
        disable: true
      }
    },
    endHour: {
      table: {
        disable: true
      }
    },
    setEndHour: {
      table: {
        disable: true
      }
    },
    rating: {
      table: {
        disable: true
      }
    },
    setRating: {
      table: {
        disable: true
      }
    },
    cousines: {
      table: {
        disable: true
      }
    },
    setCousines: {
      table: {
        disable: true
      }
    },
    zones: {
      table: {
        disable: true
      }
    },
    setZones: {
      table: {
        disable: true
      }
    },
  },
} as Meta<typeof BranchFilter>;

const cousines_: CheckObject[] = [
  {
    value: 'cousine1',
    name: 'Cousine 1',
    selected: false
  },
  {
    value: 'cousine2',
    name: 'Cousine 2',
    selected: false
  },
];

const zones_: CheckObject[] = [
  {
    value: 'zone1',
    name: 'Zone 1',
    selected: false
  },
  {
    value: 'zone2',
    name: 'Zone 2',
    selected: false
  },
  {
    value: 'zone3',
    name: 'Zone 3',
    selected: false
  },
  {
    value: 'zone4',
    name: 'Zone 4',
    selected: false
  },
  {
    value: 'zone5',
    name: 'Zone 5',
    selected: false
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchFilter> = (args: any) => {
  const [rating, setRating] = useState(0);
  const [zones, setZones] = useState(zones_);
  const [startHour, setStartHour] = useState({ value: '', label: '' });
  const [endHour, setEndHour] = useState({ value: '', label: '' });
  const [prices, setPrices] = useState([args.min, args.max]);
  const [cousines, setCousines] = useState(cousines_);
  
  return (
    <BranchFilter {...args}
      rating={rating}
      setRating={setRating}
      zones={zones}
      setZones={setZones}
      startHour={startHour}
      setStartHour={setStartHour}
      endHour={endHour}
      setEndHour={setEndHour}
      prices={prices}
      setPrices={setPrices}
      cousines={cousines}
      setCousines={setCousines}
    />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  min: 5,
  max: 200,
  color: '#EF7A08',
};
