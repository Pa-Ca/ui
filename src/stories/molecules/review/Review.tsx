import React from 'react';
import './review.scss';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

interface ReviewProps {
  /**
   * Review score
   */
  score?: number;
  /**
   * Review score text
   */
  scoreText?: string;
  /**
   * Review author
   */
  author?: string;
  /**
   * Review text
   */
  review?: string;
  /**
   * Author image
   */
  image?: string;
  /**
   * Total component width
   */
  width?: string;
}

/**
* Primary UI component for user interaction
*/
export const Review = ({
  score,
  scoreText,
  author,
  review,
  image,
  width,
  ...props
}: ReviewProps) => { 
 return (
   <Box className='review--container' backgroundColor='transparent' style={{ width }}>
     <Box className='review--image-container'>
      <Box
        className='review--image'
        borderRadius='100%'
        width='45px'
        height='45px'
        backgroundImage={image}
      />
     </Box>

     <Box className='review--data-container'>
       <Box className='review--data-header'>
         <Text weight='700' color='#112211'> {score} {scoreText} </Text>
         <Text weight='400' color='#112211'> &nbsp;&nbsp;|&nbsp; {author} </Text>
       </Box>

       <Box className='review--data-text'>
         <Text weight='400' color='#112211'>
           {review}
         </Text>
       </Box>
     </Box>

     <Box className='review--flag'>
       <Icon icon='flag' size='17.5px' color='#112211' />
     </Box>
   </Box>
 );
};



