
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { Wp_Block, GetPage288Query } from 'graphql/types';

import Blocks from 'wp/components/blocks';
export const query = graphql`
  query GetPage288($json: String) {
    wp {
      pageBy(pageId: 288) {
        blocks(json: $json) {
          ...Blocks
        }
      }
    }
  }`;

interface Props {
  data: GetPage288Query;
}  

export default (props: Props) => {
  const data = props.data;

  if (data.wp && data.wp.pageBy && data.wp.pageBy.blocks) {
    return <Blocks blocks={data.wp.pageBy.blocks as Wp_Block[]} />;
  }

  return null;
}