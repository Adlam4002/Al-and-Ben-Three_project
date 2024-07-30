import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FlagBase(props) {
  const { nodes, materials } = useGLTF('/FlagBase.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/FlagBase.glb')
