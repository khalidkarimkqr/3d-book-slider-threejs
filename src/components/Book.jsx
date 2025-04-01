export const Book = ({ ...props }) => {
  return <group {...props}>{[...pages]}</group>;
};
