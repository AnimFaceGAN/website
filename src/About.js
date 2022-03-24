import './About.css'
import feature1_webm from './imgs/feature1.webm'
import feature1_mp4 from './imgs/feature1.mp4'
import feature2 from './imgs/feature2.png'
import feature3 from './imgs/feature3.png'

function About() {
  return (
    <div>
      <div class='about-container'>
          <div class='about-title'>
            <h1>Ganimationとは</h1>
            <h4>
                <p>キャラクターイラストが自分の顔に合わせて動く。</p>
                <p>お気に入りのアバターを作ろう。</p>
            </h4>
          </div>
          
          <div class='feature-1 feature-block'>
            <div class='feature-img' id='feature-img'>
              <video class='img' autoplay loop playsinline muted>
                <source src={feature1_webm} type='video/webm' />
                <source src={feature1_mp4} type='video/mp4' />
              </video>
            </div>
            <div class='feature-desc' id='feature-desc'>
                <b>必要なものは1枚のイラストだけ</b>
                <p>
                  １枚のイラストからアバターが作れます。
                  ユーザーはアバターとして利用したいイラストを１枚準備し、アバター生成ボタンを押すだけで、簡単にオリジナルのアバターを用意できます。
                  使用できる画像、より高精度に変形できる画像にはいくつかの条件があるので注意が必要です。
                </p>
            </div>
          </div>

          <div class='feature-2 feature-block'>
            <div class='feature-img' id='feature-img'>
                <img class='img' src={feature2} alt='feature2 img' />
            </div>
            <div class='feature-desc' id='feature-desc'>
              <b>画像生成AI(GAN)の利用</b>
              <p>
                このアプリはAIを使用することで実現しています。
                GANというAIの応用技術で作られたTalking Head Anime from a Signal Imageを流用しています。
                従来はGPUでの機動を前提としていたモデルですが、Prerenderingを行うことでCPUでも使えるようになりました。
              </p>
            </div>
          </div>
          
          <div class='feature-3 feature-block'>
            <div class='feature-img' id='feature-img'>
                <img class='img' src={feature3} alt='feature3 img' />
            </div>
            <div class='feature-desc' id='feature-desc'>
              <b>ビデオ通話を楽しく</b>
              <p>
                生成したアバターはDiscord、Zoomなどのビデオ通話アプリに接続することができます。
                Ganimationは仮想Webカメラとして機能するので、仲介アプリを用意する必要はありません。
                Ganimationでビデオ通話をより楽しくしましょう！
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;