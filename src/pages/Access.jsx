import Header from "./Header";
import { Link } from "react-router-dom";
function Access({ score , dark , cilckDark}) {
  return (
    <div className={`h-full ${dark ? "app2 dark" : "app"}`} >
       <Header dark={dark} cilckDark={cilckDark} />
      <div className="container main-page">
        <section className="section1  ">
          <h1 className="sec-h1-1">Quiz completed</h1>
          <h1 className="sec-h1-2">You scored...</h1>
        </section>
        <section className="m-sec-right">
          <div className="tab">
            <div className="logo">
              <img src="/src/images/accLogo.svg" alt="" />
              <p>Accessibility</p>
            </div>
            <div className="achko">{score}</div>
            <div className="how">out of 5</div>
          </div>
          <Link  className="btn" style={{textDecoration: "none" }} to={"/"}>
            <button className="btn">Home</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Access;
