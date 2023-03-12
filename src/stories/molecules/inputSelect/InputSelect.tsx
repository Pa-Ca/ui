import React, { useState, useMemo } from 'react';
import './inputSelect.scss';
import '../../atoms/text/text.scss';
import '../inputText/inputText.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import useResizeObserver from '../../hooks/useResizeObserver';

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
  const observer = useResizeObserver<HTMLDivElement>();
  const [view, setView] = useState(false);

  const selectDropdown = () => {
    setView((currentView) => !currentView)
  };

  const selectOption = (option: OptionObject) => {
    setView(false);
    setOption(option);
  };

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
    <Box className='input-text--container' style={{ width, height }} innerRef={observer.ref}>
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
              <Box className='input-select--menu' style={{ width: `${observer.width}px` }}>
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
                      height: `${observer.height}px`,
                      width: `${observer.width}px`,
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
              </Box>
            ) :
            null
        }
      </div>

      <button onClick={selectDropdown} style={{ backgroundColor: 'transparent', border: 0 }}>
        {iconJSX}
      </button>
    </Box>
  );
};
