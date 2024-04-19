/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mario_big.glb 
Author: Mr. Soupey (https://sketchfab.com/fartingfrank)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mario-big-0edc4236f13245eca6ac2f33fb45c88a
Title: Mario Big
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function MarioBig({anime, rotation}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/mario_big.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
  console.log(actions);
  actions[anime]?.reset().fadeIn(0.1).play();
  console.log(actions[anime])
  // actions[anime]?.timeScale = 2
  return () => actions[anime]?.fadeOut(0.1);
  }, [anime]);
  
  useGSAP(() => {
    console.log(rotation);
    if (rotation === "left") {
      gsap.to(group.current.rotation, {
        y: Math.PI,
        duration: 0.3,
        ease: "expo.inOut",
      });
    } else {
      gsap.to(group.current.rotation, {
        y: 0,
        duration: 0.3,
        ease: "expo.inOut",
      });
    }
  }, [rotation]);
  return (
    <group ref={group} dispose={null} position={[0, -1, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.115}>
          <group name="mario_big_exportedfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="mario_model_mg" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_28" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.eye_tx} skeleton={nodes.Object_29.skeleton} />
                    <skinnedMesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.all_tx} skeleton={nodes.Object_30.skeleton} />
                  </group>
                </group>
                <group name="mario_model_mg001" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mario_big.glb')