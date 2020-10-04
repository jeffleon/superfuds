import React from 'react';
import Carrousel from '../components/Carousel';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading'
import Error from '../components/error'

const ContainerCarousel = () => {
    const {data , loading, error} = useFetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json') 
    if (loading)
        return <Loading/>
    if (error)
        return <Error/>
    if (data)
    {
        return (
           <Carrousel items={data} />
        )
    }
}

export default ContainerCarousel