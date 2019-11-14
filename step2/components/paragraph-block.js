const CoreParagraphBlock = ({ originalContent }) => {
  return <p dangerouslySetInnerHTML={{ __html: originalContent }}></p>;
};

export default CoreParagraphBlock;
