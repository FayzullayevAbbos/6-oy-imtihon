import { Link } from "react-router-dom";
import Header from "./Header";
function Home({ setGetId, dark, cilckDark , datas }) {
  
  return (
    <div className={`h-full ${dark ? "app2 dark" : "app"}`}>
      <Header dark={dark} cilckDark={cilckDark} />
      <div className="container home">
        <section className="section1">
          <h1 className="sec-h1-1">Welcome to the</h1>
          <h1 className="sec-h1-2">Frontend Quiz!</h1>
          <p className="sec-p">Pick a subject to get started.</p>
        </section>
        <section className="section2">
          {datas.map((data) => {
            return(
              <Link onClick={() => setGetId(data.id)}  key={data.id} style={{textDecoration: "none" }} to={"game"}>
                <div className="options">
                  <img style={{backgroundColor: `${data.iconBoxColor}` , padding:"2px 3px" , borderRadius: "8px"}  } src={data.icon} alt="rasm" />
                  <p>{data.title}</p>
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </div>
  );
}

export default Home;
