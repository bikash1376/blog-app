import "./topbar.css";
const TobBar = () => {
  return <div className="top">
    <div className="topLeft">
    <i class="topIcon fab fa-facebook-square"></i>
    <i class="topIcon fab fa-twitter-square"></i>
    <i class="topIcon fab fa-pinterest-square"></i>
    <i class="topIcon fab fa-instagram-square"></i>
    </div>
<div className="topCenter">
  <ul className="topList">
    <li className="topListItem">HOME</li>
    <li className="topListItem">ABOUT</li>
    <li className="topListItem">CONTACT</li>
    <li className="topListItem">WRITE</li>
    <li className="topListItem">LOGOUT</li>
  </ul>
</div>
<div className="topRight">
  <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topImg"/>
  <i className="topSearchIcon fas fa-search" ></i>
</div>

  </div>;
};

export default TobBar;