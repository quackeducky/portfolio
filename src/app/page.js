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
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23ff08ea&bgColor2=%2300b83a&brightness=1.2&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=5&color1=%2300400d&color2=%23005252&color3=%2300ebeb&embedMode=off&envPreset=dawn&fov=45&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=2.2&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=2.6&uDensity=0.7&uFrequency=5.5&uSpeed=0.8&uStrength=0.1&uTime=0&wireframe=false&zoomOut=false'> </ShaderGradient>
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
          <div className ="flex justify-end gap-2 flex-wrap">
          <a href = "https://heffron.ai" target = "_blank">
            Heffron.ai
          </a>

          <a href = "https://github.com/quackeducky" target = "_blank">
            GitHub
          </a>        
          
          <a href = "https://www.linkedin.com/in/donald-la" target = "_blank"> 
            LinkedIn
          </a>

          <a href = "https://instagram.com/ddonaldla" target = "_blank">
            Instagram
          </a>
        </div>
     </div>

    <div className="fixed bottom-0 p-4 flex items-end justify-between w-full ">
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
