
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { Wp_Block, GetPage2259Query } from 'graphql/types';
import useWpPreview from 'hooks/use-wp-preview';
import Blocks from 'wp/components/all-blocks';
export const query = graphql`
  query GetPage2259($json: String) {
    wp {
      pageBy(pageId: 2259) {
        blocks(json: $json) {
          ...AllBlocks
        }
      }
    }
  }`;

interface Props {
  data: GetPage2259Query;
}  

export default (props: Props) => {
  const data = useWpPreview(props.data);

  if (data.wp && data.wp.pageBy && data.wp.pageBy.blocks) {
    return <Blocks blocks={data.wp.pageBy.blocks as Wp_Block[]} />;
  }

  return null;
}