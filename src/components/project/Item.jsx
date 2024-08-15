import { useEffect, useRef } from "react"

export function Item ({slide}) {
     
     const ref = useRef()

     useEffect(() => {
          console.log(ref.current.clientHeight)
     }, [])

     return (
          <div ref={ref} className="slide">
               <div className="image">
                    <img src={slide.image} alt=""/>
               </div>
               <div className="project-container">
                    <div className="project-content">
                         <h2>{slide.title}</h2>
                         <p>
                              {slide.description}
                         </p>
                         <h3>Technologies utilisées</h3>
                         <ul>
                              {slide.techno.map((element, index) => (
                                   <li key={index}>{element}</li>
                              ))}
                         </ul>
                    </div>
               </div>
          </div>
     )

}