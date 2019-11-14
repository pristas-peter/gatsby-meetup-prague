const CoreHeadingBlock = ({ attributes }) => {
  return React.createElement(`$h{attributes.level}`, {}, attributes.content);
};

export default CoreHeadingBlock;
