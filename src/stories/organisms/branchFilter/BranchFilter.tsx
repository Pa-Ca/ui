import React, { useState } from 'react';
import './branchFilter.scss';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { Range } from '../../atoms/range/Range';
import { StarRating } from '../../atoms/starRating/StarRating';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'; 
import { CheckList, CheckObject } from '../../molecules/checkList/CheckList';
import { InputSelect, OptionObject } from '../../molecules/inputSelect/InputSelect';

interface BranchFilterProps {
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

const validHours = [
  { value: '00:00', name: '12:00 am' },
  { value: '00:30', name: '12:30 am' },
  { value: '01:00', name: '1:00 am' },
  { value: '01:30', name: '1:30 am' },
  { value: '02:00', name: '2:00 am' },
  { value: '02:30', name: '2:30 am' },
  { value: '03:00', name: '3:00 am' },
  { value: '03:30', name: '3:30 am' },
  { value: '04:00', name: '4:00 am' },
  { value: '04:30', name: '4:30 am' },
  { value: '05:00', name: '5:00 am' },
  { value: '05:30', name: '5:30 am' },
  { value: '06:00', name: '6:00 am' },
  { value: '06:30', name: '6:30 am' },
  { value: '07:00', name: '7:00 am' },
  { value: '07:30', name: '7:30 am' },
  { value: '08:00', name: '8:00 am' },
  { value: '08:30', name: '8:30 am' },
  { value: '09:00', name: '9:00 am' },
  { value: '09:30', name: '9:30 am' },
  { value: '10:00', name: '10:00 am' },
  { value: '10:30', name: '10:30 am' },
  { value: '11:00', name: '11:00 am' },
  { value: '11:30', name: '11:30 am' },
  { value: '12:00', name: '12:00 pm' },
  { value: '12:30', name: '12:30 pm' },
  { value: '13:00', name: '1:00 pm' },
  { value: '13:30', name: '1:30 pm' },
  { value: '14:00', name: '2:00 pm' },
  { value: '14:30', name: '2:30 pm' },
  { value: '15:00', name: '3:00 pm' },
  { value: '15:30', name: '3:30 pm' },
  { value: '16:00', name: '4:00 pm' },
  { value: '16:30', name: '4:30 pm' },
  { value: '17:00', name: '5:00 pm' },
  { value: '17:30', name: '5:30 pm' },
  { value: '18:00', name: '6:00 pm' },
  { value: '18:30', name: '6:30 pm' },
  { value: '19:00', name: '7:00 pm' },
  { value: '19:30', name: '7:30 pm' },
  { value: '20:00', name: '8:00 pm' },
  { value: '20:30', name: '8:30 pm' },
  { value: '21:00', name: '9:00 pm' },
  { value: '21:30', name: '9:30 pm' },
  { value: '22:00', name: '10:00 pm' },
  { value: '22:30', name: '10:30 pm' },
  { value: '23:00', name: '11:00 pm' },
  { value: '23:30', name: '11:30 pm' },
]

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
            backgroundColor='#112211'
            height='0.5px'
            width='100%'
            className='branch-filter--line'
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
                        options={validHours}
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
                        options={validHours}
                        width='100%'
                      />
                    </Box>
                  </Box>
                </motion.div>
              )
            }
          </AnimatePresence>

          <Box
            backgroundColor='#112211'
            height='0.5px'
            width='100%'
            className='branch-filter--line'
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
            backgroundColor='#112211'
            height='0.5px'
            width='100%'
            className='branch-filter--line'
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
            backgroundColor='#112211'
            height='0.5px'
            width='100%'
            className='branch-filter--line'
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
            backgroundColor='#112211'
            height='0.5px'
            width='100%'
            className='branch-filter--line'
          />
        </motion.div>
      </Box>
    </Box>
  );
};
