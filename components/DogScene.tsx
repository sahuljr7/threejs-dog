'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import DogModel from './DogModel'

export default function DogScene() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <color attach="background" args={['#90EE90']} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <DogModel />
      <OrbitControls 
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

