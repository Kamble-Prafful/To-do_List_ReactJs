import Bg_img from "../Assets/bg-img2.jpg";
function Header() {
  return (
    <>
      <div className="bg-img">
        <img src={Bg_img} alt="Loading" />
      </div>
      <div className="greetings">
        <h1>Good Morning</h1>
        <h5>
          “Appreciation can make a day, even change a life. Your willingness to
          put it into words is all that is necessary.”
        </h5>
      </div>
    </>
  );
}

export default Header;
