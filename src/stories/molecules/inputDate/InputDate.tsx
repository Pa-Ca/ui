import React, { forwardRef, SyntheticEvent, useEffect, useRef, useState } from 'react';
import './inputDate.scss';
import '../../atoms/text/text.scss';
import DatePicker from 'react-datepicker';
import { Text } from '../../atoms/text/Text';
import 'react-datepicker/dist/react-datepicker.css';

interface InputDateProps {
  /**
   * Current selected date
   */
  date?: Date;
  /**
   * Function to select date
   */
  setDate: (date: Date, event: SyntheticEvent<any, Event> | undefined) => void;
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Input width
   */
  width?: string;
  /**
   * Input height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputDate = ({
  date,
  setDate,
  label = 'Fecha',
  width,
  height,
  ...props
}: InputDateProps) => {
  // useRef allows us to "store" the div in a constant, 
  // and to access it via observedDiv.current
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleContainerResized = () => {
    if(containerRef.current!.offsetHeight !== containerHeight) {
      setContainerHeight(containerRef.current!.offsetHeight);
    }
  }

  // we also instantiate the resizeObserver and we pass
  // the event handler to the constructor
  const resizeObserver = new ResizeObserver(handleContainerResized);

  useEffect(() => {
    // the code in useEffect will be executed when the component
    // has mounted, so we are certain containerRef.current will contain
    // the div we want to observe
    resizeObserver.observe(containerRef.current!);


    // if useEffect returns a function, it is called right before the
    // component unmounts, so it is the right place to stop observing
    // the div
    return function cleanup() {
      resizeObserver.disconnect();
    }
  })

  type ButtonProps = React.HTMLProps<HTMLButtonElement>;
  const DateInputButton = forwardRef<HTMLButtonElement, ButtonProps>(({ value, onClick }, ref) => (
    <button
      className="text text--h6 input-text--input"
      style={{ height: `${containerHeight}px` }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <div className='input-text--container' style={{ width, height }} ref={containerRef}>
      <div className='input-text--content'>
        <DatePicker
          selected={date}
          onChange={setDate}
          customInput={<DateInputButton />}
        />
        
        <div className='input-text--label'>
          <Text type='h6'>
            &nbsp;{label}&nbsp;
          </Text>
        </div>

      </div>
    </div>
  );
};
