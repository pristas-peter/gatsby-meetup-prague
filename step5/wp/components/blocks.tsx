
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { BlocksFragment } from 'graphql/types';

import AcfPjurBannerCarousel from 'blocks/acf/pjur-banner-carousel';
import AcfPjurInfoBox from 'blocks/acf/pjur-info-box';
import AcfPjurInstagramGrid from 'blocks/acf/pjur-instagram-grid';
import AcfPjurFooter from 'blocks/acf/pjur-footer';
import AcfPjurTextIcons from 'blocks/acf/pjur-text-icons';
import AcfPjurTopProducts from 'blocks/acf/pjur-top-products';
export const query = graphql`
fragment Blocks on WP_Block {
  ...AcfPjurBannerCarousel
  ...AcfPjurInfoBox
  ...AcfPjurInstagramGrid
  ...AcfPjurFooter
  ...AcfPjurTextIcons
  ...AcfPjurTopProducts
  
}`;

interface Props {
  blocks?: BlocksFragment[];
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

        
        if (block.__typename === 'WP_AcfPjurBannerCarouselBlock') {
          return <AcfPjurBannerCarousel {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurInfoBoxBlock') {
          return <AcfPjurInfoBox {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurInstagramGridBlock') {
          return <AcfPjurInstagramGrid {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurFooterBlock') {
          return <AcfPjurFooter {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurTextIconsBlock') {
          return <AcfPjurTextIcons {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurTopProductsBlock') {
          return <AcfPjurTopProducts {...block} key={i} />;
        }
    
        return null;
      })}
    </>
  );
};
