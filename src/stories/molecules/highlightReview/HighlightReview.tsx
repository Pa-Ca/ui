import React, { MouseEventHandler } from 'react';
import './highlightReview.scss'
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import useResizeObserver from '../../hooks/useResizeObserver';
import { StarRating } from '../../atoms/starRating/StarRating';

interface HighlightReviewProps {
  /**
   * Review title
   */
  title?: string;
  /**
   * Review text
   */
  review?: string;
  /**
   * Review score
   */
  score?: number;
  /**
   * Review author name
   */
  author?: string;
  /**
   * Review author description
   */
  authorDescription?: string;
  /**
   * Review image
   */
  image?: string;
  /**
   * On click in "View more"
   */
  viewMore: MouseEventHandler<HTMLDivElement>;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card main color
   */
  color?: string;
  /**
   * Card shadow color
   */
  shadowColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const HighlightReview = ({
  title,
  review,
  score,
  author,
  authorDescription,
  image,
  viewMore,
  width,
  height,
  color,
  shadowColor,
  ...props
}: HighlightReviewProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box className='highlight-review--container'>
      <Box
        className='highlight-review--shadow'
        style={{ width: observer.width, height: observer.height }}
        backgroundColor={shadowColor}
      />
      
      <Box className='highlight-review--card' style={{ width, height }} innerRef={observer.ref}>
        <Box className='highlight-review--title-zone'>
          <Text type='h5' weight='700' color='#112211'>
            “{title}”
          </Text>
        </Box>

        <Box className='highlight-review--description-zone'>
          <Text color='#112211' opacity={0.5}>
            {review}
          </Text>
        </Box>

        <Box className='highlight-review--view-more-zone' onClick={viewMore}>
          <Text type='h6' weight='700'>
            View more
          </Text>
        </Box>

        <Box className='highlight-review--rating-zone'>
          <StarRating size={24} rating={score} color={color} />
        </Box>

        <Box className='highlight-review--name-zone'>
          <Text type='h6' weight='700' color='#112211'>
            {author}
          </Text>
        </Box>

        <Box className='highlight-review--person-zone'>
          <Text type='h7' color='#112211' opacity={0.5}>
            {authorDescription}
          </Text>
        </Box>

        <Box className='highlight-review--google-zone'>
          <Icon icon='google' size='20px' />
          <Text color='#112211' weight='700' type='h7' opacity={0.4} className='highlight-review--google'>
            Google
          </Text>
        </Box>

        <Box
          backgroundImage={image}
          borderRadius='8px'
          className='highlight-review--img'
        />
      </Box>
    </Box>
  );
};
