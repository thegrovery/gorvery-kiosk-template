/*===== Components =====*/
import React from "react"
//import Button1 from '@components/Button1'
import QRCode from "react-qr-code";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Asset({ 
  //Props
  image, imageAlt, name, link, qrCodeValue
}) {
  return (
    <div className={componentStyles.AssetOuter}>
      <div 
        className={componentStyles.Asset} 
        data-popupcard="card-1"
      >
        <p>[ASSET THUMBNAIL]</p>
        <p>[ASSET NAME]</p>
        <p>[ASSET TYPE]</p>
        <div>
          <QRCode 
            value={qrCodeValue}
            size={256}
            bgColor="#fafafa"
            fgColor="#212121"
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
    
  )
}
