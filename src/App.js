import React from "react";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  // Dữ liệu phim mẫu
  const movies = [
    {
      id: 1,
      title: "The Crown",
      image: "https://wallpaperaccess.com/full/1902881.jpg",
    },
    {
      id: 2,
      title: "Money Heist",
      image: "https://wallpaperaccess.com/full/2387079.jpg",
    },
    {
      id: 3,
      title: "Breaking Bad",
      image: "https://wallpaperaccess.com/thumb/781822.jpg",
    },
    {
      id: 4,
      title: "Stranger Things",
      image: "https://wallpaperaccess.com/thumb/642696.png",
    },
  ];

  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <a href="/" className="header-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </a>
        <div className="header-buttons">
          <select className="language-select">
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
          <button className="header-button">Đăng Nhập</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
        </h1>
        <p className="hero-subtitle">Giá từ 70.000 đ. Hủy bất kỳ lúc nào.</p>
        <input
          type="email"
          className="email-input"
          placeholder="Nhập địa chỉ email của bạn"
        />
        <button className="start-button">Bắt đầu</button>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2 className="content-title">Trending now</h2>

        <div className="filter-bar">
          <select className="filter-select">
            <option value="Vietnam">Vietnam</option>
            <option value="US">US</option>
            <option value="Korea">Korea</option>
          </select>
          <select className="filter-select">
            <option value="Movies">Movies</option>
            <option value="TV Shows">TV Shows</option>
          </select>
        </div>

        {/* Slider Component */}
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-card-overlay">
                <span className="movie-rank">TOP {index + 1}</span>
                <span className="movie-label">Recently Added</span>
              </div>
              <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
              />
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>
      <div className="plans-section">
        <h2 className="plans-title">A Plan To Suit Your Needs</h2>
        <div className="plans-container">
          <div className="plan-card mobile">
            <h3>Mobile</h3>
            <p>480p</p>
            <ul>
              <li>Fair video quality</li>
              <li>For your phone or tablet</li>
            </ul>
            <p>70,000 đ /mo</p>
          </div>
          <div className="plan-card basic">
            <h3>Basic</h3>
            <p>720p</p>
            <ul>
              <li>Good video quality</li>
              <li>For your phone, tablet, laptop and TV</li>
            </ul>
            <p>108,000 đ /mo</p>
          </div>
          <div className="plan-card">
            <h3>Standard</h3>
            <p>1080p</p>
            <ul>
              <li>Great video quality</li>
              <li>For your phone, tablet, laptop and TV</li>
            </ul>
            <p>220,000 đ /mo</p>
          </div>
          <div className="plan-card most-popular">
            <h3>Premium</h3>
            <p>4K + HDR</p>
            <ul>
              <li>Best video quality</li>
              <li>Immersive sound (spatial audio)</li>
              <li>For your phone, tablet, laptop and TV</li>
            </ul>
            <p>260,000 đ /mo</p>
          </div>
        </div>

        <h2 className="reasons-title">More Reasons to Join</h2>
        <div className="reasons-container">
          <div className="reason-card">Stories tailored to your taste</div>
          <div className="reason-card">Cancel or switch plans anytime</div>
          <div className="reason-card">A place just for kids</div>
          <div className="reason-card">
            For your phone, tablet, laptop and TV
          </div>
        </div>
      </div>
    </div>
  );
}
