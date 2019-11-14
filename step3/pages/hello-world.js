import React from "react";
import { graphql } from "gatsby";
import Blocks from "components/blocks";

export const query = graphql`
  query GetHelloWorld {
    wp {
      postBy(uri: "hello-world") {
        blocks {
          ...Blocks
        }
      }
    }
  }
`;

export default props => {
  const blocks = props.data.wp.postBy.blocks;

  return <Blocks blocks={blocks}></Blocks>;
};
