import { graphql } from "gatsby";

export const query = graphql`
  fragment CoreParagraphBlock on WP_CoreParagraphBlock {
    originalContent
  }
`;

const CoreParagraphBlock = ({ originalContent }) => {
  return <p dangerouslySetInnerHTML={{ __html: originalContent }}></p>;
};

export default CoreParagraphBlock;
