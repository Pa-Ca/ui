import React, { useMemo } from "react";
import './reservationDetails.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import ReservationDetail from '../../utils/objects/ReservationDetail';
import scoreString from '../../utils/scoreString';
interface ReservationDetailsProps {
  /**
   * Branch name
   */
  branchName?: string;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Branch score
   */
  text?: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Number of branch reviews
   */
  reviews?: number;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card background image from url
   */
  backgroundImage?: string;
  /**
   * Reservation details list
   */
  detailsList: ReservationDetail[];
}

/**
 * Primary UI component for user interaction
 */
export const ReservationDetails = ({
  branchName,
  score,
  color,
  reviews,
  text,
  width,
  height,
  backgroundImage,
  detailsList,
  ...props
}: ReservationDetailsProps) => {

  const totalPrice = useMemo(() => {
    return (
      detailsList.reduce((sum, detail) => sum + detail.price, 0)
    );
  }, [detailsList]);

  return (
    <Box className='details-card--container' weakShadow style={{ width }}>
      <Box className='details-card--summary'>
        {/* Image Box */}
        <Box
          backgroundImage={backgroundImage}
          className="detail-image"
        >
        </Box>
        <Box className='resumen-box-text'>
          <Text>
            Resumen
          </Text>
          <Text type='h5' weight='600'>
            {branchName}
          </Text>
          <Box className="score-box">
            <Box className="score-box-with-border" style={{borderColor: color}}>
              {score}
            </Box>
            <Text type='h7' weight='700'>
              {scoreString(score ?? 0)}
            </Text>
            <Text type='h7'>
              {reviews} reviews
            </Text>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor='#112211' height='0.5px' className='detail--line' />

      <Box>
        <Text>
          {text}
        </Text>
      </Box>

      <Box backgroundColor='#112211' height='0.5px' className='detail--line' />

      <Box className="details-title">
           <Text weight="700">Detalles de Reserva </Text>
      </Box>

      {
       detailsList.map((detail,index) => (
         <Box
           key={`check-list--item-${index}-${detail.name}`}
           className='detail-element'
         >
           <Text>{detail.name}</Text>
           <Text>${detail.price} </Text>
         </Box>
       ))
      }

      <Box backgroundColor='#112211' height='0.5px' className='detail--line' />

      <Box className='detail-element'>
        <Text>
          Total
        </Text>
        <Text>
          ${totalPrice}
        </Text>
      </Box>
      
    </Box>
  );
};