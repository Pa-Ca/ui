import React, { useState, useEffect, useMemo, useRef } from 'react';
import './inputSelect.scss';
import '../../atoms/text/text.scss';
import '../inputText/inputText.scss';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';

export type OptionObject = {
  value: string;
  name: string;
}

interface InputSelectProps {
  /**
   * Current input option
   */
  option?: OptionObject;
  /**
   * Function that changes the option each time the input select is updated
   */
  setOption?: Function;
  /**
   * Possible options
   */
  options?: OptionObject[];
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
export const InputSelect = ({
  option = { value: '', name: '' },
  setOption = () => { },
  options = [],
  label = 'Text select',
  width,
  height,
  ...props
}: InputSelectProps) => {
  // useRef allows us to "store" the div in a constant, 
  // and to access it via observedDiv.current
  const containerRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const selectDropdown = () => {
    setView((currentView) => !currentView)
  };

  const selectOption = (option: OptionObject) => {
    setView(false);
    setOption(option);
  };

  const handleContainerResized = () => {
    if(containerRef.current!.offsetWidth !== containerWidth) {
      setContainerWidth(containerRef.current!.offsetWidth - 2); 
    }
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

  const iconJSX = useMemo(() => {
    if (view) {
      return (
        <view className="text-input--icon input-select--icon">
          <Icon icon='up' size='24' />
        </view>
      );
    }
    else {
      return (
        <view className="text-input--icon input-select--icon">
          <Icon icon='down' size='24' />
        </view>
      );
    }
  }, [view])

  return (
    <div className='input-text--container' style={{ width, height }} ref={containerRef}>
      <div className='input-text--content'>
        <button className='text text--h6 input-text--input' onClick={selectDropdown}>
          {option.name}
        </button>
        
        <div className='input-text--label'>
          <Text type='h6'>
            &nbsp;{label}&nbsp;
          </Text>
        </div>

        {
          view ?
            (
              <div className='input-select--menu' style={{ width: `${containerWidth}px` }}>
                {
                  options.map((option, index) => {
                    // El background de los impares sera distinto de los pares 
                    // para diferenciarlos
                    const backgroundColor = index % 2 === 0 ? '#F1F1F1' : 'white';
                    // La primera y ultima opcion deben tener bordes en la zona
                    // superior e inferior respectivamente para adaptarse al 
                    // menu
                    const borderTopLeftRadius = index === 0 ? 4 : 0;
                    const borderTopRightRadius = borderTopLeftRadius;
                    const borderBottomLeftRadius = index === options.length - 1 ? 4 : 0;
                    const borderBottomRightRadius = borderBottomLeftRadius;
                    // Estilo de los bordes de la opcion
                    const optionStyle = {
                      borderTopLeftRadius,
                      borderTopRightRadius,
                      borderBottomLeftRadius,
                      borderBottomRightRadius,
                      height: `${containerHeight}px`,
                      width: `${containerWidth}px`,
                    }

                    return (
                    <view style={{ ...optionStyle }}>
                      <button 
                        className='input-select--option-button' 
                        style={{ backgroundColor, ...optionStyle }}
                        onClick={() => selectOption(option)}
                      >
                        <Text type='h6'>
                          &nbsp;{option.name}&nbsp;
                        </Text>
                      </button>
                    </view>
                  )})
                }
              </div>
            ) :
            null
        }
      </div>

      <button onClick={selectDropdown} style={{ backgroundColor: 'transparent', border: 0 }}>
        {iconJSX}
      </button>
    </div>
  );
};
