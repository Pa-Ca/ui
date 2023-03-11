import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import './highlightReview.scss'
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
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
  // useRef allows us to "store" the div in a constant, 
  // and to access it via observedDiv.current
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

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

  return (
    <Box className='highlight-review--container'>
      <Box
        className='highlight-review--shadow'
        style={{ width: containerWidth, height: containerHeight }}
        backgroundColor={shadowColor}
      />
      
      <div className='highlight-review--card' style={{ width, height }} ref={containerRef}>
        <Box className='highlight-review--title-zone'>
          <Text type='h5' bold color='#112211'>
            “{title}”
          </Text>
        </Box>

        <Box className='highlight-review--description-zone'>
          <Text color='#112211' className='highlight-review--description'>
            {review}
          </Text>
        </Box>

        <Box className='highlight-review--view-more-zone' onClick={viewMore}>
          <Text type='h6' bold>
            View more
          </Text>
        </Box>

        <Box className='highlight-review--rating-zone'>
          <StarRating size={24} rating={score} color={color} />
        </Box>

        <Box className='highlight-review--name-zone'>
          <Text type='h6' bold color='#112211'>
            {author}
          </Text>
        </Box>

        <Box className='highlight-review--person-zone'>
          <Text type='h7' color='#112211' className='highlight-review--person'>
            {authorDescription}
          </Text>
        </Box>

        <Box className='highlight-review--google-zone'>
          <Icon icon='google' size='20px' />
          <Text color='#112211' bold type='h7' className='highlight-review--google'>
            Google
          </Text>
        </Box>

        <Box
          backgroundImage={image}
          borderRadius='8px'
          className='highlight-review--img'
        />
      </div>
    </Box>
  );
};
