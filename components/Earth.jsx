import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Earth(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../3d/untitled.glb");

  useFrame(({clock}) => {
    group.current.rotation.y = clock.getElapsedTime() / 5
  })

  return (
    <group ref={group} {...props} dispose={null} scale={3.5}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Cube004_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Cube004_2.geometry}
          material={nodes.Cube001_Cube004_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube003.geometry}
        material={materials.LightBrown}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004_Icosphere005.geometry}
        material={nodes.Icosphere004_Icosphere005.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003_Icosphere004.geometry}
        material={nodes.Icosphere003_Icosphere004.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002_Icosphere003.geometry}
        material={nodes.Icosphere002_Icosphere003.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001_Icosphere002.geometry}
        material={nodes.Icosphere001_Icosphere002.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials.Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_3.geometry}
          material={materials.Snow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_4.geometry}
          material={materials.Brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_5.geometry}
          material={materials.DarkGreen}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../3d/untitled.glb");