//custom hook

import {useEffect, useState} from 'react'

function useCurrencyinfo(Currency){
    const [data, setdata] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[Currency]))
        console.log(data);
    }, [Currency])

    console.log(data);
    return data
}

export default useCurrencyinfo;