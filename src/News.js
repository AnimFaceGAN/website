import './styles/News.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function News() {
  return (
    <div>
      <h1>News</h1>
      <TwitterTimelineEmbed 
        sourceType='profile'
        screenName='ganimationapp'
        options={{width: '80%'}} 
      />
      
    </div>
  );
}

export default News;