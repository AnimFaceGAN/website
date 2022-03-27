import './styles/Download.css'
import Button from '@material-ui/core/Button';

function Download() {
  return (
    <div>
      <h1>Download</h1>
      <div className="download-container">
        <Button variant="contained" color="primary" className="download-btn" onClick={() => window.open('https://ganimation.booth.pm/items/3419118','_blank')}>  
          windows版
        </Button>
        <p className="download-caution">※インストール先は管理者権限の不要な場所「C:&yen;Users&yen;ユーザー名&yen;??」</p>
        <div className="spec-desc">
          <b>必要な外部ソフト</b><br/>
          <p>OBS Studio</p>
          <p>↓ダウンロードURL</p>
          <a href="#" onClick={() => window.open('https://obsproject.com/ja/download','_blank')}>
            https://obsproject.com/ja/download
          </a>
        </div>
        <div className="spec-desc">
          <b>推奨スペック</b><br/>
          <p>OS: Windows10 64-bit</p>
          <p>メモリー: 16GB RAM</p>
          <p>GPU: RTX2070super</p>
          <p>ストレージ: 6GB 利用可能</p>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default Download;