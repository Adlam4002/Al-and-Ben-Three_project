import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tent(props) {
  const { nodes, materials } = useGLTF('/Tent.glb')
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

useGLTF.preload('/Tent.glb')