import Fade from "react-reveal/Fade";

const MenuCard = (props) => {
  return (
    <Fade left cascade>
      <div className="menu-card">
        <div className="menu-card-image">
          <img src={props.img} alt="" />
        </div>
        <h4 className="menu-card-title">{props.title}</h4>
        <p className="menu-card-description">{props.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">$7.10</span>
          <div className="menu-card-btns">
            <a href="/" className="btn btn-order">
              Order
            </a>
            <a href="/" className="btn btn-secondary">
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MenuCard;
