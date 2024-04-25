"use client";
import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export default function Home() {
  return (

  <main>
      <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23ea0000&bgColor2=%23ff0000&brightness=1&cAzimuthAngle=180&cDistance=3.4&cPolarAngle=90&cameraZoom=1&color1=%23756eff&color2=%2353c2db&color3=%230095e3&embedMode=off&envPreset=city&fov=60&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=3&positionX=-1.4&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.6&uFrequency=5.5&uSpeed=0.4&uStrength=2.5&uTime=0&wireframe=false'> </ShaderGradient>
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
          <div className ="flex justify-end gap-2 flex-wrap">
          <a href = "https://quackedai.com" target = "_blank">
            Quacked AI
          </a>

          <a href = "https://github.com/quackeducky" target = "_blank">
            GitHub
          </a>        
          
          <a href = "https://linkedin.com/donald-la" target = "_blank"> 
            LinkedIn
          </a>

          <a href = "https://instagram.com/ddonaldla" target = "_blank">
            Instagram
          </a>
        </div>
     </div>

    <div className="fixed bottom-0 p-4 flex items-end justify-between w-full">
        <h1> Donald La </h1>

        <div className="flex flex-col items-end gap-2"> 
          <a href = "mailto:donaldla7@gmail.com"> donaldla7@gmail.com</a>
          <div className="flex gap-2">
            <h2> Founder </h2>
            <h2> Melbourne, Australia </h2>
          </div>
        </div>
    </div>

  </main>
  );
}
