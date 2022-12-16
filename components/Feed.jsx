import {useState, useEffect} from 'react'
import {Box, Stack, Typography } from "@mui/material"
import SideBar from './SideBar'
import Videos from './Videos'

import { fetchApi } from '../utilities/fetchApi'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState(null);

  useEffect(() =>{
   setVideos(null)

  fetchApi(`search?part=snippet&q=${selectedCategory}`)
  .then((data) => setVideos(data.items))
}, [selectedCategory])

  return (
    <Stack
    sx={{ flexDirection: { sx:
    "column", md: "row" }}} >
      <Box 
      sx={{ height: { sx: "auto", md: "92vh" },
      borderRight: "2px solid gray",
      px:{ sx: 0, md: 2 }}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box>
        <Typography variant='h4' fontWeight="bold" color="blue" marginLeft="25px" >
        {selectedCategory}
        <span style={{color:"white", marginLeft: "10px"}}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
      
</Stack>
  )
}

export default Feed