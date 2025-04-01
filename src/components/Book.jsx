export const Book = ({ ...props }) => {
  return <group {...props}>
    {[...pages].ap((pageData, index) => (
      <Page key={index} number={index} {...pageData} />
    ))}
    </group>;
};
