import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Các Danh Mục Hàng Đầu</h1>
      <p>
        Khám phá nhiều loại nhà nghỉ cho thuê phục vụ cho mọi loại hình
        đối tượng khách du lịch. Hòa mình vào văn hóa địa phương, tận hưởng những tiện nghi
        như ở nhà và tạo ra những kỷ niệm khó quên ở điểm đến mơ ước của bạn
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
