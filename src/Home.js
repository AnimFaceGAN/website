import './styles/Home.css'
import logo from './imgs/logo.png'

function Home() {
  return (
    <div>
      <div className="land-container">
            <div className="disp-left">
                <div className="chars">
                    <video autoplay loop playsinline muted>
                        <source src="imgs/chars/char1.webm" type="video/webm" />
                        <source src="imgs/chars/char1.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
    
            <div className="disp-right">
                <div className="product-description">
                    <div>
                        <img src={logo} alt="product logo" /><br/>
                        <div className="main-description">顔イラストでVtuber!<br/></div>
                        <div className="sub-description">
                            用意するのは1枚のイラストだけであとはAIにおまかせ.<br/>
                            さあ,あなたもVtuber気分を味わおう !
                        </div>
                        <button className="to-download-btn" onclick="window.open('https://ganimation.booth.pm/items/3419118','_blank')">ダウンロード</button>
                        <div className="space"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Home;