import { graphql } from "gatsby";

export const query = graphql`
  fragment UnknownBlock on WP_Block {
    saveContent
  }
`;

const UnknownBlock = ({ saveContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: saveContent }}></div>;
};

export default UnknownBlock;
