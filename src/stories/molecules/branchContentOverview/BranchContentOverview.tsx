import React from 'react';
import './branchContentOverview.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';

interface BranchContentOverviewProps {
  /**
   * Branch overview
   */
  overview?: string;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchContentOverview = ({
  overview,
  width,
  height,
  ...props
}: BranchContentOverviewProps) => {
  return (
    <Box className='branch-content-overview--container' style={{ width, height}}>
      <Text type='h5' color='#112211' weight='700'> Overview </Text>

      <Box height='16px' />

      <Text color='#112211' opacity={0.75} className='branch-content-overview--overview'>
        {overview}
      </Text>
    </Box>
  );
};
