
import React , { useMemo , useState }from 'react';
import { Box } from '../../atoms/box/Box';
import { BranchItem  } from '../branchItem/BranchItem';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';

import './branchBoard.scss';

export type branchObject = {
    name                 : string;
    score                : number;
    reviews              : number;
    amenity              : string;
    category             : string;
    location             : string;
    firstReserve         : string;
    secondReserve        : string;
    priceScore           : number;
    like                 : boolean;
    image                : string;
    onViewMoreClick      : () => void;
    onFirstReserveClick  : () => void;
    onLikeClick          : () => void;
    onSecondReserveClick : () => void;

};


// Do a list of branch objects to use as a placeholder
const branchList = [
  {
    name: 'Branch 1 Nombre Largo',
    score: 4.5,
    reviews: 100,
    amenity: 'Amenity 1',
    location: 'Location 1',
    firstReserve: '1:00 am',
    secondReserve: '2:00 am',
    priceScore: 4.5,
    category: 'Category 1',
    like: true,
    image: 'https://images.unsplash.com/photo-1610394560928-8b5f5b0b5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    onViewMoreClick: () => console.log('View more'),
    onFirstReserveClick: () => console.log(''),
    onLikeClick: () => console.log('Like'),
    onSecondReserveClick: () => console.log('Second Reserve'),
  },
  {
    name: 'Branch 2',
    score: 4.5,
    reviews: 420,
    amenity: 'Amenity 2',
    location: 'Location 2',
    firstReserve: '2:00 am',
    secondReserve: '10:00 am',
    priceScore: 4.5,
    category: 'Category 1',
    like: true,
    image: 'https://images.unsplash.com/photo-1610394560928-8b5f5b0b5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    onViewMoreClick: () => console.log('View more'),
    onFirstReserveClick: () => console.log(''),
    onLikeClick: () => console.log('Like'),
    onSecondReserveClick: () => console.log('Second Reserve'),
  },
  {
    name: 'Branch 3',
    score: 4.5,
    reviews: 69,
    amenity: 'Amenity 3',
    location: 'Location 3',
    firstReserve: '3:00 am',
    secondReserve: '10:00 am',
    category: 'Category 2',
    priceScore: 4.5,
    like: true,
    image: 'https://images.unsplash.com/photo-1610394560928-8b5f5b0b5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    onViewMoreClick: () => console.log('View more'),
    onFirstReserveClick: () => console.log(''),
    onLikeClick: () => console.log('Like'),
    onSecondReserveClick: () => console.log('Second Reserve'),
  },
  {
    name: 'Branch 4',
    score: 4.5,
    reviews: 100,
    amenity: 'Amenity 4',
    location: 'Location 4',
    firstReserve: ' 4:00 pm',
    secondReserve: '10:00 am',
    category: 'Category 2',
    priceScore: 4.5,
    like: true,
    image: 'https://images.unsplash.com/photo-1610394560928-8b5f5b0b5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    onViewMoreClick: () => console.log('View more'),
    onFirstReserveClick: () => console.log(''),
    onLikeClick: () => console.log('Like'),
    onSecondReserveClick: () => console.log('Second Reserve'),
  },
  {
    name: 'Branch 5',
    score: 4.5,
    reviews: 100,
    amenity: 'Amenity 5',
    location: 'Location 5',
    firstReserve: ' 4:00 pm',
    secondReserve: '10:00 am',
    priceScore: 4.5,
    like: true,
    image: 'https://images.unsplash.com/photo-1610394560928-8b5f5b0b5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    onViewMoreClick: () => console.log('View more'),
    onFirstReserveClick: () => console.log(''),
    onLikeClick: () => console.log('Like'),
    onSecondReserveClick: () => console.log('Second Reserve'),
  },
];

// Do a list of branch objects to use as a placeholder (This will be the concatenation of the branchList and the longBranchList)
export const exampleLongBranchList = [
  branchList[0],
  branchList[1],
  branchList[2],
  branchList[3],
  branchList[4],
  branchList[4],
  branchList[2],
  branchList[3],
  branchList[0],
  branchList[1],
  branchList[4],
  branchList[2],
  branchList[2],
  branchList[1],
  branchList[0],
]




  
  interface BranchBoard {
    /**
     * Component width
    */
    width?: string;

    /**
     * Component height
     */
    height?: string;

    /**
     * Number of branches per page
     */
    branchesPerPage?: number;

    /**
     * All branch reviews
     */
    branches?: branchObject[];

    /**
     * Component color
     */
    branchColor?: string;

    /**
     * Component price color
     */
    branchPriceColor?: string;

    

  }
  
  /**
   * Primary UI component for user interaction
   */
  export const BranchBoard = ({
    width,
    height,
    branchesPerPage  = 5,
    branches         = exampleLongBranchList,
    branchColor      = '#EF7A08',
    branchPriceColor = '#FF8682',
    ...props
  }: BranchBoard) => {  
    const [page, setPage] = useState(1);

    const totalPages = useMemo(() => {
      return Math.ceil(branches.length / branchesPerPage);
    }, [branches, branchesPerPage])
    
    const paginatedbranches = useMemo(() => {
      const inicio = (page - 1) * branchesPerPage;
      const fin = inicio + branchesPerPage;
      return branches.slice(inicio, fin);
    }, [page, branches, branchesPerPage])

    const totalScore = useMemo(() => {
      return branches.reduce((sum, branch) => sum + branch.score, 0) / branches.length;
    }, [branches]);

    const line = (
      <Box backgroundColor='#112211' height='0.5px' className='branch-board--line'/>
    );

    const goToNextPage = () => {
      if (page > totalPages - 1) return;
      setPage((oldPage) => oldPage + 1);
    }

    const goToPreviousPage = () => {
      if (page < 2) return;
      setPage((oldPage) => oldPage - 1);
    }
  
    return (
      <Box width={width} {...props} className = "branch-board--container" >



          {
            
            paginatedbranches.map(branch => (
              <Box>
                <BranchItem 
                  color = {branchColor}     
                  priceColor =  {branchPriceColor}   
                  { ...branch} />
                </Box>
              
            ))
          }
          <Box className='branch-board--pages-centerer'>
            <Box className='branch-board--pages'>
              
              <Box
                className='branch-board--icon'
                onClick={goToPreviousPage}
                style={{ cursor: page < 2 ? 'auto' : 'pointer' }}
              >
                <Icon icon='left' size='18px' color={page < 2 ? '#a7a2a2' : 'black'} />
              </Box>

              <Text color='#112211' weight='400'>
                {page} de {totalPages}
              </Text>

              <Box
                className='branch-board--icon'
                onClick={goToNextPage}
                style={{ cursor: page > totalPages - 1 ? 'auto' : 'pointer' }}
              >
                <Icon icon='right' size='18px' color={page > totalPages - 1 ? '#a7a2a2' : 'black'}/>
              </Box>
            
            </Box>
          </Box>  
        </Box>
    );
  };
  