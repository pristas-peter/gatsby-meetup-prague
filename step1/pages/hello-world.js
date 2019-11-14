import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query GetHelloWorld {
    wp {
      postBy(uri: "hello-world") {
        blocks {
          ... on CoreParagraphBlock {
            originalContent
          }
          ... on CoreHeadingBlock {
            attributes {
              level
              content
            }
          }
        }
      }
    }
  }
`;

export default props => {
  const blocks = props.data.wp.postBy.blocks;

  return (
    <>
      {blocks.map((block, i) => {
        if (block.__typename === "WP_CoreHeadingBlock") {
          return React.createElement(
            `$h{block.attributes.level}`,
            {},
            block.attributes.content
          );
        }

        if (block.__typename === "WP_CoreParagraphBlock") {
          return (
            <p dangerouslySetInnerHTML={{ __html: block.originalContent }}></p>
          );
        }
      })}
    </>
  );
};
