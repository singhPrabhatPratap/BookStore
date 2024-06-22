import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Course() {
  let [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:4001/book")
        // console.log(result.data)
        setData(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <>
      <div className='text-center mt-28'>
        <h1 className='font-bold text-3xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='text-center mb-2 m-10'>
          ima eius nam optio. Delecluptatum error odit ipsum, ex deserunt. Dolor dolores nostrum mollitia numquam rem labore nisi, vero ea porro molestiae modi cum delectus, dignissimos sunt ut nobis quas adipisci accusantium ad quasi tempora aspernatur eveniet magnam id. Nulla, minus. Eum ipsum inventore quisquam assumenda suscipit fuga accusantium fugiat quibusdam id omnis!
        </p>
        <Link to='/'><button className='bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600'>Back</button></Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 space-y-5 space-x-5'>
        {data.map((book) => (
        // <div className="w-full h-full flex justify-center items-center bg-red-500">
          <Card item={book} key={book.id} />
        // </div>
        ))}
      </div>
    </>
  )
}
