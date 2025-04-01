import {pages} from "./UI"

const Page = ({number, front, back, ...props}) => {
  return (
    <group {...props}>
      <mesh scale = {0.1}>
        <boxGeometry />
        <meshBasicMaterial color= "red"/>
      </mesh>

    </group>
  )
}



export const Book = ({ ...props }) => {
  return (
    <group {...props}>
      {[...pages].map((pageData, index) => (
        <Page key={index} number={index} {...pageData} />
      ))}
    </group>
  )
};

