import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense } from 'react'

export default function App() {
  const gltf = useLoader(GLTFLoader, './antiutopiacube.glb')

  return (
    <div style={{ width: '99vw', height: '99vh' }}>
      <Canvas flat linear>
        <Suspense fallback={null}>
          <>
            <primitive object={gltf.scene} scale={0.55} />
          </>
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  )
}
