import "./Detail.css";
import ImgDetail from "../../assets/detail/details.png";

const Detail = () => {
  return (
    <div className="detail-container container">
      <div className="detail-card">
        <h5>Now Is The Time To Upgrade Your Marketing Solution</h5>
        <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
        <ul>
          <li>
            <span>Understand customers and meet their requirements</span>
          </li>
          <li>
            <span>Targeted client base with Tivo's efficient technology</span>
          </li>
        </ul>
        <button className="btn">Sign Up</button>
      </div>
      <img src={ImgDetail} alt="detail" />
    </div>
  );
};

export default Detail;
