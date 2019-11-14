
/* eslint-disable */
/* Warning: this file is autogerated, any changes would be lost */
import React from 'react';
import { graphql } from 'gatsby';
import { Wp_Block, GetPost1Query } from 'graphql/types';

import Blocks from 'wp/components/blog/hello-world/blocks';
export const query = graphql`
  query GetPost1($json: String) {
    wp {
      postBy(postId: 1) {
        blocks(json: $json) {
          ...BlogHelloWorldBlocks
        }
      }
    }
  }`;

interface Props {
  data: GetPost1Query;
}  

export default (props: Props) => {
  const data = props.data;

  if (data.wp && data.wp.postBy && data.wp.postBy.blocks) {
    return <Blocks blocks={data.wp.postBy.blocks as Wp_Block[]} />;
  }

  return null;
}