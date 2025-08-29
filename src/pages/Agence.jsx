import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
  const imgdivRef = useRef(null);
  const imageArray = [
  "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Michele_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEL_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/CAMILLE_480x640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MAXIME_480x640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEGGIE_480x640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/joel_480x640_3-480x640.jpg"
];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to(imgdivRef.current,{
      scrollTrigger:{
        trigger:imgdivRef.current,
        markers:true,
        start:'top 20%',
        end:'top -120%',
        pin:true,
        scrub:true
      }
    })
  })
  return (
    <div>
      <div className='section_1'>
        <div ref={imgdivRef} className='bg-red-500 w-[15vw] h-[20vw] overflow-hidden rounded-3xl absolute top-[20%] left-[31%]'>
          <img className='w-full h-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='overflow-hidden relative'>
          <div className='w-screen mt-[50vh]'>
            <h1 className='uppercase text-[19.5vw] text-center font-[Lausanne-bold] leading-[17.5vw] trackng-tight'>Soixan7e <br />Douze</h1>
          </div>
          <div className='pl-[40%] mt-15'>
            <p className='text-5xl font-[Lausanne-bold] '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section_2 h-screen">

      </div>

    </div>
  )
}

export default Agence
