import kaw from "./kaw.png";
import React, { useState } from "react"; //useState  ใช้จัดการตัวเเปรต่างๆ
import Theme from "./components/Theme"; //props.children คือ content @yied
{
  /* //ใส่รูปอื่น */
}
export default function MyFirstPage() {
  const [clicks, setClicks] = useState(0); //ประกาศตัวเเปร ประกาศ funiction คลิกปุ่ม
  const [movies, setMovies] = useState([]); //ประกาศตัวเเปร ประกาศ funiction movies
  //ฟังชันคลิกปุ่ม เก็บการนับ
  function onButtonClick() {
    console.log("CLICK!!!");
    setClicks(clicks + 1);
  }
  //ฟังชัน movies
  const getMovies = function () {
    let movies = [
      {
        id: "1",
        title: "Star Wars",
        releaseYear: "1977",
        image: "https://www.csbootstrap.com/img/starwar.jpg",
      },
      {
        id: "2",
        title: "Back to the Future",
        releaseYear: "1985",
        image: "https://www.csbootstrap.com/img/back-to-the-future.jpg",
      },
      {
        id: "3",
        title: "The Matrix",
        releaseYear: "1999",
        image: "https://www.csbootstrap.com/img/matrix.jpg",
      },
      {
        id: "4",
        title: "Inception",
        releaseYear: "2010",
        image: "https://www.csbootstrap.com/img/inception.jpg",
      },
      {
        id: "5",
        title: "Interstellar",
        releaseYear: "2014",
        image: "https://www.csbootstrap.com/img/interstellar.jpg",
      },
    ];
    console.log("Data : ", movies);
    setMovies(movies);
  };

  return (
    <Theme>
      <div>
        <h1>Hello World !!! Nawathpolkaw62122420027</h1>
        {/* //ใส่รูปอื่น */}
        <img src={kaw} width="10%;" />
        {/* เเปลงเป็น jsx จะเป็น className */}
        {/* ถ้าเป็น class จะเป็น HTML */}
        <div className="container">
          <div className="row">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
        {/* movies */}
        <div className="mb-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onButtonClick}
          >
            Click me
          </button>
          <p>
            Clicks: <span id="clicks">{clicks}</span>
          </p>
        </div>
        <div className="mb-4">
          <div>
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={getMovies}
              >
                แสดง Movies
              </button>
            </div>
            <div className="row" id="movie-row">
              {/* movies.map วัตถุประสงค์การใช้งาน */}
              {movies.map((item) => (
                //  key item.id ไอเอ็มชิ้นนีเเตกต่างจากอันนี้ กับอันนั้น ยังไง  หรือ  ถ้าไม่มี ้item.id จะError
                <div className="col-lg-4" key={item.id}>
                  <div className="card">
                    <img
                      src={item.image}
                      className="card-img-top"
                      height="250"
                      alt="..."
                    />
                    <div className="card-body">
                      {/* item.title คล้าย laravel */}
                      <h5 className="card-title">{item.title}</h5>
                      <button className="btn btn-primary">Go somewhere</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
}
