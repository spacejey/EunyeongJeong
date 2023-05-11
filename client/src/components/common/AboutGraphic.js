import { useEffect } from 'react'

const AboutGraphic = () => {
  const count = 7

  useEffect(() => {
    const GraphicContainer = document.getElementById('about-container')

    if (GraphicContainer) {
      for (let i = 0; i < count; i++) {
        const gooeyBox = document.createElement('div')
        gooeyBox.className = 'box'
        GraphicContainer.appendChild(gooeyBox)
      }

      const intervalId = setInterval(() => {
        const gooey = document.getElementsByClassName('box')

        for (let i = 0; i < gooey.length; i++ ) {
          gooey[i].style.left = Math.floor(Math.random() * 20) + 'vw'
          gooey[i].style.top = Math.floor(Math.random() * 100) + 'vh'
        }
      }, 4000)

      return () => clearInterval(intervalId)
    }
  }, [count])

  return (
    <div className='about-graphic-container'>
      <div id="about-container"></div>
    </div>
  )
}

export default AboutGraphic
