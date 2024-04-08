import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Lưu Ý</h3>
        <ul>
          <a href="https://www.hutech.edu.vn/">Thông tin</a>
          <li>Các điều khoản và điều kiện</li>
          <li>Chính sách hoàn trả và hoàn tiền</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Liên Lạc</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>0123456789</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>VinhBaoMan@gmail.com</p>
        </div>
        {/* <img src="/assets/social.png" alt="payment" /> */}
      </div>
    </div>
  )
}

export default Footer