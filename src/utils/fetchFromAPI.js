

export const fetchFromAPI=async ()=>{
  const res=await fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',{
       "method":"get",
       "headers": {
        'X-RapidAPI-Key': 'c4493e580amsh0eeb41ccf9c3becp1948bfjsnab9bb1f0b824',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    });
    const data=await res.json();
    return data;
  }