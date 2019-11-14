import CoreHeadingBlock from "components/heading-block";
import CoreParagraphBlock from "components/paragraph-block";

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
      })}
    </>
  );
};
