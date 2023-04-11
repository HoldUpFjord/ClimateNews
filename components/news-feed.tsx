import { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator"


 
interface NewsInfo {
  title:string;
  thumbnail:string;
  url:string
  published:string;
  source:string;
}

interface API {
  articles : NewsInfo[] | [];

}
  
export function NewsFeed () {
  const [data, setData] = useState<API>({ articles: [] });
  
  const options = {
    method: 'GET',
    headers: {

        'X-RapidAPI-Key': '4852155a1bmshd3e4dbc3f121d3ap1567d8jsn98b7b7e02f87',
        'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
    }
  };
 useEffect(() => {
  // fetch('https://climate-news-feed.p.rapidapi.com/?source=Nasa%20Climate&limit=50&exclude=The%20Guardian', options)
  fetch('https://climate-news-feed.p.rapidapi.com/page/2?limit=10', options)
  // .then(response => response.json())
  .then(response => response.json())
  .then(response => setData({articles : response.articles}))
  // .then(data => setData(data))
  .catch(err => console.error(err));
  }, []);
   
  
 

  if (!data) {
    return <p>Loading...</p>
  }
 
    return (
      <div className='newsFeed'>
        {data.articles && 
            (<div className='max-w-50 flex flex-col items-center'>
                {data.articles.map(child => (
                  <div className='my-10' key={child.title}>
                    <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">{child.source}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {child.title}
                    </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-sm">
                        {/* Slices the raw date data to a readable format */}
                    <div>{child.published.slice(0,10 )}</div>
                    <Separator orientation="vertical" />
                    {/* <a href={child.url}><img src={child.thumbnail}></img></a> */}
                    <div> Test </div>
                    <Separator orientation="vertical" />
                    {/* <div>{child.url}</div> */}
                    <p>Test</p>
                  </div>
            </div>
        ))}
      </div>)}
    </div>
      
    )
  }