import React, {useEffect, useState} from 'react'

function BackToTop() {
  const [goUp, setGoUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            setGoUp(true);
        }else {
            setGoUp(false);
        }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  return (
    <div>
       {/* page up */}
       <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
    </div>
  )
}

export default BackToTop;