import {pages} from "./UI";
import {useRef} from "react";
import { BoxGeometry } from "three";


const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71; // 4:3 aspect ratio
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS

const pageGeometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2
);

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
        {[...pages].map((pageData, index) => 
          index === 0 ? (
            <Page 
              position-x={index * 0.15} 
              key={index} 
              number={index} 
              {...pageData} 
            />
          ) : null
        )}
      </group>
    );
  };

