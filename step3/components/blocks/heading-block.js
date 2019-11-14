import { graphql } from "gatsby";

export const query = graphql`
  fragment CoreHeadingBlock on WP_CoreHeadingBlock {
    attributes {
      level
      content
    }
  }
`;

const CoreHeadingBlock = ({ attributes }) => {
  return React.createElement(`$h{attributes.level}`, {}, attributes.content);
};

export default CoreHeadingBlock;
