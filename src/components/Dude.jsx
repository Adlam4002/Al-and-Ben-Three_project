import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dude(props) {
  const { nodes, materials } = useGLTF('/Dude.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        // material={nodes.mesh_0.material}
        
      >
        <meshStandardMaterial color={'hotpink'}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Dude.glb')
