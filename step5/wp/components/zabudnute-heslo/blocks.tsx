
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { ZabudnuteHesloBlocksFragment } from 'graphql/types';

import AcfPjurFooter from 'blocks/acf/pjur-footer';
import AcfPjurTitle from 'blocks/acf/pjur-title';
import AcfPjurUserPasswordReset from 'blocks/acf/pjur-user-password-reset';
export const query = graphql`
fragment ZabudnuteHesloBlocks on WP_Block {
  ...AcfPjurFooter
  ...AcfPjurTitle
  ...AcfPjurUserPasswordReset
  
}`;

interface Props {
  blocks?: ZabudnuteHesloBlocksFragment[];
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

        
        if (block.__typename === 'WP_AcfPjurFooterBlock') {
          return <AcfPjurFooter {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurTitleBlock') {
          return <AcfPjurTitle {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserPasswordResetBlock') {
          return <AcfPjurUserPasswordReset {...block} key={i} />;
        }
    
        return null;
      })}
    </>
  );
};
