import React, { useState } from 'react';
import './branchFilter.scss';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { Range } from '../../atoms/range/Range';
import { StarRating } from '../../atoms/starRating/StarRating';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'; 
import { CheckList, CheckObject } from '../../molecules/checkList/CheckList';

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
   * Current hour range
   */
  hours: number[];
  /**
   * Function that change hour range
   */
  setHours: () => void;
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
  hours,
  setHours,
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

  const formatTime = (minutes: number) => {
    // Convertir minutos a horas y minutos
    var hours = Math.floor(minutes / 60);
    var mins = minutes % 60;
  
    // Convertir horas a formato de 12 horas (am o pm)
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    // Las 12 pm y 12 am no necesitan ser convertidas a 0
    hours = hours ? hours : 12;
  
    // Formatear las horas y minutos en un string en el formato 'h:mmam' o 'h:mmpm'
    var formattedTime = hours + ':' + (mins < 10 ? '0' : '') + mins + ampm;
  
    return formattedTime;
  };
  
  return (
    <Box className='branch-filter--container' style={{ width, height }}>
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
                <Box className='branch-filter--range'>
                  <Range
                    values={hours}
                    setValues={setHours}
                    min={0}
                    max={1410}
                    minMark={`${formatTime(0)}`}
                    maxMark={`${formatTime(1410)}`}
                    labelFunct={formatTime}
                    step={30}
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
  );
};
