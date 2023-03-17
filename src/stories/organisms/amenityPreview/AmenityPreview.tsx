import React, { useMemo } from 'react';
import './amenityPreview.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
import useResizeObserver from '../../hooks/useResizeObserver';
import { BranchCard } from '../../molecules/branchCard/BranchCard';

export type BranchObject = {
  name: string;
  score: number;
  reviews: number;
  discount: boolean;
  amenity: string;
  location: string;
  firstReserve: string;
  secondReserve: string;
  priceScore: number;
  backgroundImage?: string;
  onClick: () => void;
  onFirstReserveClick: () => void;
  onSecondReserveClick: () => void;
}

interface AmenityPreviewProps {
  /**
   * Amenity title
   */
  title?: string;
  /**
   * Amenity short description
   */
  description?: string;
  /**
   * Branches that have this amenity
   */
  branches?: BranchObject[];
  /**
   * On menu button click
   */
  onButtonClick?: () => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const AmenityPreview = ({
  title,
  description,
  branches,
  onButtonClick,
  width,
  height,
  color,
  ...props
}: AmenityPreviewProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const nPlates = useMemo(() => {
    return Math.max(1, Math.floor(observer.width / 240));
  }, [observer.width]);

  return (
    <Box className='amenity-preview--container' style={{ width, height }} innerRef={observer.ref}>
      <Box className='amenity-preview--header'>
        <Box className='amenity-preview--summary'>
          <Box>
            <Text type='h3' weight='600'>
              {title}
            </Text>
          </Box>

          <Box>
            <Text color='#112211' weight='400' opacity={0.75}>
              {description}
            </Text>
          </Box>
        </Box>

        <Button primary={false} backgroundColor={color} onClick={onButtonClick}>
          <Text type='h6' color='#112211' weight='500'>
            Ver Más
          </Text>
        </Button>
      </Box>

      <Box className='amenity-preview--content'>
        {
          branches?.slice(0, nPlates).map((branch, index) => (
            <Box className='amenity-preview--branch' >
              <BranchCard {...branch} color={color} width='100%' />
            </Box>
          ))
        }
      </Box>
    </Box>
  );
};
