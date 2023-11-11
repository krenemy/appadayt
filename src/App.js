import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Box sx={{ backgroundColor: '#000' }}>
=======
    {/* <Box sx={{ backgroundColor: '#000' }}> */}
>>>>>>> refs/remotes/origin/main
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
