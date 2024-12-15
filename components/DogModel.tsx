'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function DogModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.8, 0.8, 1.2]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.1, 0.5]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>

      {/* Snout - White */}
      <mesh position={[0, 0.9, 0.9]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.2, 1.2, 0.8]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.2, 1.2, 0.8]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Ears */}
      <mesh position={[0.25, 1.5, 0.5]}>
        <boxGeometry args={[0.2, 0.3, 0.2]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      <mesh position={[-0.25, 1.5, 0.5]}>
        <boxGeometry args={[0.2, 0.3, 0.2]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>

      {/* Legs */}
      <mesh position={[0.3, 0.3, 0.4]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.3, 0.3, 0.4]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.3, 0.3, -0.4]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.3, 0.3, -0.4]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Chest - White */}
      <mesh position={[0, 0.6, 0.4]}>
        <boxGeometry args={[0.6, 0.7, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.8, -0.7]}>
        <boxGeometry args={[0.2, 0.2, 0.4]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </group>
  )
}

