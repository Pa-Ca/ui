import React, { useMemo, useState } from 'react';
import './amenityList.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon, IconType } from '../../atoms/icon/Icon';
import { motion } from 'framer-motion/dist/framer-motion'; 
import useResizeObserver from '../../hooks/useResizeObserver';

export type AmenityObject = {
  name: string;
  icon: IconType;
}

interface AmenityListProps {
  /**
   * Amenity list
   */
  amenityList: AmenityObject[];
  /**
   * Component width
   */
  width?: string;
  /**
   * Component main color
   */
  color?: string;
}

const MAX_SHOW = 11;

/**
 * Primary UI component for user interaction
 */
export const AmenityList = ({
  amenityList = [],
  width,
  color,
  ...props
}: AmenityListProps) => {
  const observer = useResizeObserver<HTMLDivElement>();
  const [viewMore, setViewMore] = useState(false);

  const nColumns = useMemo(() => {
    if (observer.width > 918) return 3;
    if (observer.width > 468) return 2;
    else return 1;
  }, [observer.width])

  const showList = useMemo(() => {
    const showList_ = amenityList.map((e) => {
      return (
        <Box className='amenity-list--item' key={`amenity-list--item-${e.name}`}>
          <Icon icon={e.icon} size='24px' />
          <Box width='10px' />
          <Text> {e.name} </Text>
        </Box>
      )
    });

    if (amenityList.length < MAX_SHOW) return showList_;
    
    if (viewMore) {
      if (amenityList.length % nColumns < nColumns - 1) {
        for (let i = 0; i < nColumns - (amenityList.length % nColumns) - 1; i++) {
          showList_.push(<Box />);
        }
      }
      else if (amenityList.length % nColumns === 0) {
        for (let i = 0; nColumns - 1; i++) {
          showList_.push(<Box />);
        }
      }

      showList_.push(
        <Box className='amenity-list--view' onClick={() => setViewMore(false)}>
          <Text weight='600' color={color}>
            {`Ver menos`}
          </Text>
        </Box>
      );
      return showList_;
    }
    else {
      showList_.splice(
        MAX_SHOW,
        0,
        <Box className='amenity-list--view' onClick={() => setViewMore(true)}>
          <Text weight='600' color={color}>
            {`Ver ${amenityList.length - MAX_SHOW} más`}
          </Text>
        </Box>
      );
      return showList_;
    }
  }, [viewMore, nColumns]);

  const amenitiesHeight = useMemo(() => {
    if (amenityList.length < MAX_SHOW) return Math.round(49 * amenityList.length / nColumns);
    else if (viewMore) return 49 * showList.length / nColumns;
    return 49 * (MAX_SHOW + 1) / nColumns;
  }, [viewMore, nColumns]);

  return (
    <Box className='amenity-list--container' style={{ width }} innerRef={observer.ref}>
      <Box className='amenity-list--title'>
        <Text type='h5' color='#112211' weight='700'>
          Servicios
        </Text>
      </Box>

      <motion.div
        initial={{ height: '0px' }}
        animate={{ height: `${amenitiesHeight}px` }}
        exit={{ height: `${amenitiesHeight}px` }}
        transition={{ duration: 0.5 }}
        className='amenity-list--amenity-container'>
        { showList }
      </motion.div>
    </Box>
  );
};
