import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"

import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import SearchFeed from "./components/SearchFeed"

const App = () => (
  <BrowserRouter>
  <Box sx={{ backgroundColor: "black" }}>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
  </BrowserRouter>
)

export default App