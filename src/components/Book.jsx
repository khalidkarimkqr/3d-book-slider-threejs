import {pages} from "./UI";
import {useRef} from "react";
import { BoxGeometry, SkinnedMesh } from "three";


const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71; // 4:3 aspect ratio
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2
);


pageGeometry.translate(PAGE_WIDTH/ 2, 0, 0);
const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    // ALL VERTICES
    vertex.fromBufferAttribute(position, i); // get the vertex
    const x = vertex.x; // get the x position of the vertex
  
    const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH)); // calculate the skin index
    let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH; // calculate the skin weight
  
    skinIndexes.push(skinIndex, skinIndex + 1, 0, 0); // set the skin indexes
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0); // set the skin weights
  }

  pageGeometry.setAttribute(
    "skinIndex",
    new Uint16BufferAttribute(skinIndexes, 4)
  );

  pageGeometry.setAttribute(
    "skinWeight",
    new Float32BufferAttribute(skinWeights, 4)
  );



const Page = ({number, front, back, ...props}) => {
  const group = useRef();

  const manualSkinnedMesh = useMemo(() => {
    const bones = [];
    for (let i = 0; i <= PAGE_SEGMENTS; i++) {
      let bone = new Bone();
      bones.push(bone);
      if (i === 0) {
        bone.position.x = 0;
      } else {
        bone.position.x = SEGMENT_WIDTH;
      }
      if (i > 0) {
        bones[i - 1].add(bone); // attach the new bone to the previous bone
      }
    }
    const skeleton = new Skeleton(bones);
    const materials = pageMaterials;
    const mesh = new SkinnedMesh(pageGeometry, materials);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }, []);



  return (
    <group {...props} ref ={group}>
      <mesh scale = {0.5}>
        <primitive object = {pageGeometry} attach = {"geometry"} />
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

