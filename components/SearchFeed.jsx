import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Typography } from "@mui/material"
import Videos from './Videos'

import { fetchApi } from '../utilities/fetchApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() =>{
  
  fetchApi(`search?part=snippet&q=${searchTerm}`)
  .then((data) => setVideos(data.items))
}, [searchTerm])

  return (
      <Box>
        <Typography variant='h4' fontWeight="bold" color="blue" marginLeft="25px" >
        See results for: 
        <span style={{color:"white", marginLeft: "10px"}}>{searchTerm} videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
      
  )
}

export default SearchFeed