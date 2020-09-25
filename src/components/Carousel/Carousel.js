import React, { useRef, useEffect, useState, useCallback } from 'react'
import './Carousel.scss'
import CarouselControls from './CarouselControls/CarouselControls'
import CarouselItem from './CarouselItem/CarouselItem'


const Carousel = props => {


    //KNOWN BUGS:
    // some active item error with spam clicking button whilst auto carousel is going


    const [carouselInterval, setCarouselInterval] = useState(false)
    const [item, setItem] = useState(0)

    const carouselContainer = useRef(null)
    const carousel = useRef(null)
    const interval = useRef()

    const debounce = (func, wait) => {
        let timeout;
        return function(...args) {
          const context = this;
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        };
      };



    useEffect(() => {
        if(window.innerWidth >= 1440) {
            return
        } else {
            setCarouselInterval(true)
            interval.current = setInterval(() => {
                if(carouselContainer.current.scrollLeft === carouselContainer.current.scrollWidth - carouselContainer.current.offsetWidth) {
                    carouselContainer.current.classList.add('Carousel-container--auto')
                    carouselContainer.current.scrollTo({left: 0,})
                    carouselContainer.current.classList.remove('Carousel-container--auto')
                }
                carouselContainer.current.scrollTo({
                left: carouselContainer.current.scrollLeft + carouselContainer.current.offsetWidth})
                if((carouselContainer.current.scrollLeft + carouselContainer.current.offsetWidth) === carousel.current.offsetWidth - carouselContainer.current.offsetWidth) {
                    setItem(0)
                } else {
                setItem((carouselContainer.current.scrollLeft + carouselContainer.current.offsetWidth) / carouselContainer.current.offsetWidth)
                }
            }, 10000);
        }

        return(() => {
            clearInterval(interval.current)
        })
    }, [])


    const stopInterval = useCallback(debounce(() => {

        if (window.innerWidth >= 1440) {
            clearInterval(interval.current)
            setCarouselInterval(false)
            return
        } else if(!carouselInterval){
            setCarouselInterval(true)
            interval.current = setInterval(() => {
                if(!carouselContainer.current.scrollLeft) {
                    clearInterval(interval.current)
                }
                if(carouselContainer.current.scrollLeft === carouselContainer.current.scrollWidth - carouselContainer.current.offsetWidth) {
                    carouselContainer.current.classList.add('Carousel-container--auto')
                    carouselContainer.current.scrollTo({left: 0,})
                    carouselContainer.current.classList.remove('Carousel-container--auto')
                }
                carouselContainer.current.scrollTo({
                left: carouselContainer.current.scrollLeft + carouselContainer.current.offsetWidth})
                if((carouselContainer.current.scrollLeft + carouselContainer.current.offsetWidth) === carousel.current.offsetWidth - carouselContainer.current.offsetWidth) {
                    setItem(0)
                } else {
                setItem((carouselContainer.current.scrollLeft + carouselContainer.current.offsetWidth) / carouselContainer.current.offsetWidth)
                }
            }, 10000);
        }
    }, 200), [carouselInterval])

    useEffect(() => {
        window.addEventListener("resize", stopInterval)
        return(() => {
            window.removeEventListener("resize", stopInterval)
        })
    }, [stopInterval])


    const scroll = (scrollMultiplier) => {
        if((carouselContainer.current.offsetWidth * scrollMultiplier) / carouselContainer.current.offsetWidth === item) {
            return
        }
        if(carouselContainer.current.scrollLeft === carouselContainer.current.scrollWidth - carouselContainer.current.offsetWidth) {
            carouselContainer.current.classList.add('Carousel-container--auto')
            carouselContainer.current.scrollTo({left: 0,})
            carouselContainer.current.classList.remove('Carousel-container--auto')
        }
        carouselContainer.current.scrollTo({left: carouselContainer.current.offsetWidth * scrollMultiplier})
        setItem((carouselContainer.current.offsetWidth * scrollMultiplier) / carouselContainer.current.offsetWidth)
    }


    return(
        <div className="CarouselControls-Container">
            <div className="Carousel-container" ref={carouselContainer}>
                <div className="Carousel" ref={carousel}>
                    <CarouselItem title="Project Paramour" img="paramour">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</CarouselItem>
                    <CarouselItem title="Seraph Station" img="seraph">The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.</CarouselItem>
                    <CarouselItem title="Federal II Tower" img="federal">A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.</CarouselItem>
                    <CarouselItem title="Trinity Bank Tower" img="trinity">Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.</CarouselItem>
                    <CarouselItem title="Project Paramour" img="paramour">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</CarouselItem>
                </div>
                <CarouselControls scroll={scroll} carouselContainer={carouselContainer} activeItem={item}/>
            </div>
        </div>
    )
}

export default Carousel