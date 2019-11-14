import CoreHeadingBlock from "components/heading-block";
import CoreParagraphBlock from "components/paragraph-block";
import UnknownBlock from "components/unknown";

export const query = graphql`
  fragment Blocks on WP_Block {
    ...CoreParagraphBlock
    ...CoreHeadingBlock
    ...UnknownBlock
  }
`;

export default ({ blocks }) => {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.__typename === "WP_CoreHeadingBlock") {
          return <CoreHeadingBlock {...block}></CoreHeadingBlock>;
        }

        if (block.__typename === "WP_CoreParagraphBlock") {
          return <CoreParagraphBlock> {...block} </CoreParagraphBlock>;
        }

        return <UnknownBlock {...block}></UnknownBlock>;
      })}
    </>
  );
};
