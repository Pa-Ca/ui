import React, { useState } from 'react';
import './branchFilter.scss';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { Range } from '../../atoms/range/Range';
import getValidHours from '../../utils/getValidHours';
import CheckObject from '../../utils/objects/CheckObject';
import OptionObject from '../../utils/objects/OptionObject';
import { StarRating } from '../../atoms/starRating/StarRating';
import { CheckList } from '../../molecules/checkList/CheckList';
import { InputSelect } from '../../molecules/inputSelect/InputSelect';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'; 

export interface BranchFilterProps {
  /**
   * Minimum price
   */
  min: number;
  /**
   * Maximum price
   */
  max: number;
  /**
   * Current price range
   */
  prices: number[];
  /**
   * Function that change price range
   */
  setPrices: () => void;
  /**
   * Current start hour 
   */
  startHour: OptionObject;
  /**
   * Function that change start hour
   */
  setStartHour: Function;
  /**
   * Current end hour 
   */
  endHour: OptionObject;
  /**
   * Function that change end hour
   */
  setEndHour: Function;
  /**
   * Current minimum rating 
   */
  rating: number;
  /**
   * Function that change rating
   */
  setRating: () => void;
  /**
   * Current cousines values
   */
  cousines: CheckObject[];
  /**
   * Function that change cousines values
   */
  setCousines: () => void;
  /**
   * Current zones values
   */
  zones: CheckObject[];
  /**
   * Function that change zones values
   */
  setZones: () => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchFilter = ({
  min,
  max,
  prices,
  setPrices,
  startHour,
  setStartHour,
  endHour,
  setEndHour,
  rating,
  setRating,
  cousines,
  setCousines,
  zones,
  setZones,
  color,
  width,
  height,
  ...props
}: BranchFilterProps) => {
  const [zoneView, setZoneView] = useState(false);
  const [hoursView, setHoursView] = useState(false);
  const [pricesView, setPricesView] = useState(false);
  const [ratingView, setRatingView] = useState(false);
  const [cousineView, setCousineView] = useState(false);

  const checkboxHeight = (length: number) => `${length * 29 + 32}px`;
  
  return (
    <Box className='branch-filter--container' style={{ width, height }}>
      <Box>
        <Box>
          <Text type='h5' weight='600'> Filtros </Text>
        </Box>

        <motion.div
          className='branch-filter--item-container'
          initial={{ flex: 0 }}
          animate={{ flex: pricesView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box 
            className='branch-filter--item-header branch-filter--range-header' 
            onClick={() => setPricesView(!pricesView)}
          >
            <Text> Precio </Text>
            <Icon icon={pricesView ? 'up' : 'down'} size='24px'/>
          </Box>

          <AnimatePresence>
            {
              pricesView && (
                <motion.div
                  initial={{ opacity: 0, y: -50, height: '0px' }}
                  animate={{ opacity: 1, y: pricesView ? 0 : -50, height: '80px' }}
                  exit={{ opacity: 0, y: -50, height: '0px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box className='branch-filter--range'>
                    <Range
                      values={prices}
                      setValues={setPrices}
                      min={min}
                      max={max}
                      minMark={`$${min}`}
                      maxMark={`+$${max}`}
                      labelFunct={(price: number) => `$${price}`}
                      displayLabels
                      color={color}
                    />
                  </Box>
                </motion.div>
              )
            }
          </AnimatePresence>

          <Box
            backgroundColor='#C4C8C4'
            height='0.5px'
            width='100%'
          />
        </motion.div>

        <motion.div
          className='branch-filter--item-container'
          initial={{ flex: 0 }}
          animate={{ flex: hoursView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box 
            className='branch-filter--item-header branch-filter--range-header' 
            onClick={() => setHoursView(!hoursView)}
          >
            <Text> Horarios </Text>
            <Icon icon={hoursView ? 'up' : 'down'} size='24px'/>
          </Box>

          <AnimatePresence>
            {
              hoursView && (
                <motion.div
                  initial={{ opacity: 0, y: -50, height: '0px' }}
                  animate={{ opacity: 1, y: hoursView ? 0 : -50, height: '80px' }}
                  exit={{ opacity: 0, y: -50, height: '0px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box className='branch-filter--hours-container'>
                    <Box className='branch-filter--hour'>
                      <InputSelect
                        label='Mínimo'
                        option={startHour}
                        setOption={setStartHour}
                        options={getValidHours()}
                        width='100%'
                      />
                    </Box>

                    <Box className='branch-filter--hour-conector'>
                      <Text>
                        a
                      </Text>
                    </Box>

                    <Box className='branch-filter--hour'>
                      <InputSelect
                        label='Máximo'
                        option={endHour}
                        setOption={setEndHour}
                        options={getValidHours()}
                        width='100%'
                      />
                    </Box>
                  </Box>
                </motion.div>
              )
            }
          </AnimatePresence>

          <Box
            backgroundColor='#C4C8C4'
            height='0.5px'
            width='100%'
          />
        </motion.div>

        <motion.div
          className='branch-filter--item-container'
          initial={{ flex: 0 }}
          animate={{ flex: ratingView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box className='branch-filter--item-header' onClick={() => setRatingView(!ratingView)}>
            <Text> Rating </Text>
            <Icon icon={ratingView ? 'up' : 'down'} size='24px'/>
          </Box>

          <AnimatePresence>
            {
              ratingView && (
                <motion.div
                  initial={{ opacity: 0, y: -50, height: '0px' }}
                  animate={{ opacity: 1, y: ratingView ? 0 : -50, height: '70px' }}
                  exit={{ opacity: 0, y: -50, height: '0px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box className='branch-filter--rating'>
                    <StarRating
                      rating={rating}
                      setRating={setRating}
                      size={37.5}
                      color={color}
                    />
                  </Box>
                </motion.div>
              )
            }
          </AnimatePresence>

          <Box
            backgroundColor='#C4C8C4'
            height='0.5px'
            width='100%'
          />
        </motion.div>

        <motion.div
          className='branch-filter--item-container'
          initial={{ flex: 0 }}
          animate={{ flex: cousineView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box className='branch-filter--item-header' onClick={() => setCousineView(!cousineView)}>
            <Text> Cocina </Text>
            <Icon icon={cousineView ? 'up' : 'down'} size='24px'/>
          </Box>

          <AnimatePresence>
            {
              cousineView && (
                <motion.div
                  initial={{ opacity: 0, y: -50, height: '0px' }}
                  animate={{ opacity: 1, y: cousineView ? 0 : -50, height: `${checkboxHeight(cousines.length)}` }}
                  exit={{ opacity: 0, y: -50, height: '0px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box className='branch-filter--check-list'>
                    <CheckList
                      items={cousines}
                      setItems={setCousines}
                    />
                  </Box>
                </motion.div>
              )
            }
          </AnimatePresence>

          <Box
            backgroundColor='#C4C8C4'
            height='0.5px'
            width='100%'
          />
        </motion.div>

        <motion.div
          className='branch-filter--item-container'
          initial={{ flex: 0 }}
          animate={{ flex: zoneView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box className='branch-filter--item-header' onClick={() => setZoneView(!zoneView)}>
            <Text> Zona </Text>
            <Icon icon={zoneView ? 'up' : 'down'} size='24px'/>
          </Box>

          <AnimatePresence>
            {
              zoneView && (
                <motion.div
                  initial={{ opacity: 0, y: -50, height: '0px' }}
                  animate={{ opacity: 1, y: zoneView ? 0 : -50, height: `${checkboxHeight(zones.length)}` }}
                  exit={{ opacity: 0, y: -50, height: '0px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box className='branch-filter--check-list'>
                    <CheckList
                      items={zones}
                      setItems={setZones}
                    />
                  </Box>
                </motion.div>
              )
            }
          </AnimatePresence>

          <Box
            backgroundColor='#C4C8C4'
            height='0.5px'
            width='100%'
          />
        </motion.div>
      </Box>
    </Box>
  );
};
