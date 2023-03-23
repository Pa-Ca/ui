
import React , { useMemo , useState }from 'react';
import { Box } from '../../atoms/box/Box';
import { Header } from '../../organisms/header/Header';
import { BranchFilter } from '../../organisms/branchFilter/BranchFilter';
import { BranchSearch } from '../../organisms/branchSearch/BranchSearch';
import { Button } from '../../atoms/button/Button';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';

import { branchObject, BranchBoard , exampleLongBranchList} from '../../organisms/branchBoard/BranchBoard';
import { headerObject , BasicPage} from '../basicPage/BasicPage';
import { CheckObject } from '../../molecules/checkList/CheckList';
import { OptionObject } from '../../molecules/inputSelect/InputSelect';

import './branchListing.scss';

export type BranchFilterObject = {
  min: number;
  max: number;
  prices: number[];
  setPrices: () => void;
  startHour: OptionObject;
  setStartHour: Function;
  endHour: OptionObject;
  setEndHour: Function;
  rating: number;
  setRating: () => void;
  cousines: CheckObject[];
  setCousines: () => void;
  zones: CheckObject[];
  setZones: () => void;
  color?: string;

}


interface BranchListing {
  /**
   * Component width
  */
  headerArgs?: headerObject;

  /**
   * All branch reviews
   */
  branches?: branchObject[];


  /**
   * Branch filter object for the branch filter component
   */
  branchFilter?: BranchFilterObject;

}

/**
 * Primary UI component for user interaction
 */
export const BranchListing = ({
  headerArgs   = {icon: 'down', picture: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg', name: 'Jonh D.', color: '#EF7A08'},
  branches     = exampleLongBranchList,
  branchFilter = {
                  min: 0,
                  max: 100,
                  prices: [0, 100],
                  setPrices: () => {},
                  startHour: {value: '00:00', name: '00:00'},
                  setStartHour: () => {},
                  endHour: {value: '00:00', name: '00:00'},
                  setEndHour: () => {},
                  rating: 0,
                  setRating: () => {},
                  cousines: [],
                  setCousines: () => {},
                  zones: [],
                  setZones: () => {},
                  color: '#EF7A08'
  },
  ...props
}: BranchListing) => {  

  return (
    <BasicPage headerArgs = {headerArgs}  >
          
          <BranchSearch />
          
          <Box className='branch-listing--columns'>
            <Box className='branch-listing--left-column'>

              <BranchFilter {...branchFilter}/>

              {/*Create a vertical line */}
              

            </Box>

            <Box className='branch-listing--vertical-line' />
            

            <Box className='branch-listing--right-column'>

              <BranchBoard branches =  {branches}/>

            </Box>
          </Box>
        
    </BasicPage>
    

  );
};
