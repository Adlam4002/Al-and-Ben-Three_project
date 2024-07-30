import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LightWeightTent(props) {
  const { nodes, materials } = useGLTF('/LightWeightTent.glb')
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

useGLTF.preload('/LightWeightTent.glb')
