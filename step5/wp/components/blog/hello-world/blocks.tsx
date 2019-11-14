
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { BlogHelloWorldBlocksFragment } from 'graphql/types';
import Unknown from 'blocks/unknown';
import CoreHeading from 'blocks/core/heading';
export const query = graphql`
fragment BlogHelloWorldBlocks on WP_Block {
  ...CoreHeading
  ...UnknownBlock
}`;

interface Props {
  blocks?: BlogHelloWorldBlocksFragment[];
}

export default (props: Props) => {
  const {blocks} = props;

  if (!blocks) {
    return null;
  }

  return ( 
    <>
      {blocks.map((block, i) => {
        if (!block) {
          return null;
        }

        
        if (block.__typename === 'WP_CoreHeadingBlock') {
          return <CoreHeading {...block} key={i} />;
        }
    
        return <Unknown key={i} {...block} />;
      })}
    </>
  );
};
