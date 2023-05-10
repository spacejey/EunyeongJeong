import { useEffect } from 'react'

const HomeGraphic = () => {
  const count = 10

  useEffect(() => {
    const GraphicContainer = document.getElementById('container')

    if (GraphicContainer) {
      for (let i = 0; i < count; i++) {
        const gooeyBox = document.createElement('div')
        gooeyBox.className = 'box'
        GraphicContainer.appendChild(gooeyBox)
      }

      const intervalId = setInterval(() => {
        const gooey = document.getElementsByClassName('box')

        for (let i = 0; i < gooey.length; i++ ) {
          gooey[i].style.left = Math.floor(Math.random() * 70) + 'vw'
          gooey[i].style.top = Math.floor(Math.random() * 60) + 'vh'
        }
      }, 2500)

      return () => clearInterval(intervalId)
    }
  }, [count])

  return (
    <div className='home-graphic-container'>
      <div id="container"></div>
    </div>
  )
}

export default HomeGraphic
