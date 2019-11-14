
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { AllBlocksFragment } from 'graphql/types';
import Unknown from 'blocks/unknown';
import CoreCoverBlock from 'blocks/core/cover';
import CoreMediaTextBlock from 'blocks/core/media-text';
import AcfPjurInfoBox from 'blocks/acf/pjur-info-box';
import AcfPjurBannerCarousel from 'blocks/acf/pjur-banner-carousel';
import CoreHeading from 'blocks/core/heading';
import AcfPjurFooter from 'blocks/acf/pjur-footer';
import AcfPjurTextIcons from 'blocks/acf/pjur-text-icons';
import AcfPjurInstagramGrid from 'blocks/acf/pjur-instagram-grid';
import AcfPjurTopProducts from 'blocks/acf/pjur-top-products';
import AcfPjurLipsticksGrid from 'blocks/acf/pjur-lipsticks-grid';
import AcfPjurTitle from 'blocks/acf/pjur-title';
import AcfPjurUserLogin from 'blocks/acf/pjur-user-login';
import AcfPjurUserNewPassword from 'blocks/acf/pjur-user-new-password';
import AcfPjurUserSignup from 'blocks/acf/pjur-user-signup';
import AcfPjurUserPasswordReset from 'blocks/acf/pjur-user-password-reset';
import AcfPjurProduct from 'blocks/acf/pjur-product';
import AcfPjurShopifyCart from 'blocks/acf/pjur-shopify-cart';
import AcfPjurUserAccount from 'blocks/acf/pjur-user-account';
import AcfPjurUserAddresses from 'blocks/acf/pjur-user-addresses';
export const query = graphql`
fragment AllBlocks on WP_Block {
  ...CoreCoverBlock
  ...CoreMediaTextBlock
  ...AcfPjurInfoBox
  ...AcfPjurBannerCarousel
  ...CoreHeading
  ...AcfPjurFooter
  ...AcfPjurTextIcons
  ...AcfPjurInstagramGrid
  ...AcfPjurTopProducts
  ...AcfPjurLipsticksGrid
  ...AcfPjurTitle
  ...AcfPjurUserLogin
  ...AcfPjurUserNewPassword
  ...AcfPjurUserSignup
  ...AcfPjurUserPasswordReset
  ...AcfPjurProduct
  ...AcfPjurShopifyCart
  ...AcfPjurUserAccount
  ...AcfPjurUserAddresses
  ...UnknownBlock
}`;

interface Props {
  blocks?: AllBlocksFragment[];
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

        
        if (block.__typename === 'WP_CoreCoverBlock') {
          return <CoreCoverBlock {...block} key={i} />;
        }

        if (block.__typename === 'WP_CoreMediaTextBlock') {
          return <CoreMediaTextBlock {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurInfoBoxBlock') {
          return <AcfPjurInfoBox {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurBannerCarouselBlock') {
          return <AcfPjurBannerCarousel {...block} key={i} />;
        }

        if (block.__typename === 'WP_CoreHeadingBlock') {
          return <CoreHeading {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurFooterBlock') {
          return <AcfPjurFooter {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurTextIconsBlock') {
          return <AcfPjurTextIcons {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurInstagramGridBlock') {
          return <AcfPjurInstagramGrid {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurTopProductsBlock') {
          return <AcfPjurTopProducts {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurLipsticksGridBlock') {
          return <AcfPjurLipsticksGrid {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurTitleBlock') {
          return <AcfPjurTitle {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserLoginBlock') {
          return <AcfPjurUserLogin {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserNewPasswordBlock') {
          return <AcfPjurUserNewPassword {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserSignupBlock') {
          return <AcfPjurUserSignup {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserPasswordResetBlock') {
          return <AcfPjurUserPasswordReset {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurProductBlock') {
          return <AcfPjurProduct {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurShopifyCartBlock') {
          return <AcfPjurShopifyCart {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserAccountBlock') {
          return <AcfPjurUserAccount {...block} key={i} />;
        }

        if (block.__typename === 'WP_AcfPjurUserAddressesBlock') {
          return <AcfPjurUserAddresses {...block} key={i} />;
        }
    
        return <Unknown key={i} {...block} />;
      })}
    </>
  );
};
