import Carousel from 'react-elastic-carousel'
import React from 'react'
import RenderCards from '../components/rendercards'

const breakPoints = [
    { width: 1, itemsToShow: 1},
    {width: 55, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]
const Carrousel = (props) => {
    if (props.items.length > 1)
    {
        console.log(props.items)
        return(
            <Carousel breakPoints={breakPoints} className="mt-5">
                {props.items.map((item) => <RenderCards item={item}/>)}
            </Carousel>
         )
    }else
    {
        return(
            <div></div>
        )
    }
}

export default Carrousel