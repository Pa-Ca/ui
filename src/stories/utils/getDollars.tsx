import React from "react";
import { Text } from "../atoms/text/Text";

/**
 * Create a component that has as many dollars as the branch's price 
 * score
 * 
 * @param nActiveDollars Branch price score. Must be between 0 and 4
 * @param name Branch name
 */
export default (nActiveDollars: number, name?: string) => {
    const dollars = [];
    nActiveDollars = Math.floor(nActiveDollars);

    for (let i = 0; i < Math.min(nActiveDollars, 4); i++) {
      dollars.push((
        <Text
          key={`${name}-card-dollar=${i}`}
          type='h7'
          className='branch-card--summary-text'
        >
          $
        </Text>
      ));
    }
    for (let i = nActiveDollars; i < 4; i++) {
      dollars.push((
        <Text
          key={`${name}-card-dollar=${i}`}
          type='h7'
          className='branch-card--summary-text'
          color='#8D8D8D'
        >
          $
        </Text>
      ));
    }

    return (
      <Text>
        {
          dollars.map((e) => e)
        }
      </Text>
    );
  }