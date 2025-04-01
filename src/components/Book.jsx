import {pages} from "./UI";
import {useRef} from "react";

const Page = ({number, front, back, ...props}) => {
  const group = useRef();
  return (
    <group {...props} ref ={group}>
      <mesh scale = {0.1}>
        <boxGeometry />
        <meshBasicMaterial color= "red"/>
      </mesh>

    </group>
  );
};

export const Book = ({ ...props }) => {
  return (
    <group {...props}>
      {[...pages].map((pageData, index) => (
        <Page position-z={index * 0.15} key={index} number={index} {...pageData} />
      ))}
    </group>
  );
};

