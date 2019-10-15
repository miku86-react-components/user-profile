import React from "react";
import photo from "../../assets/photo.jpg";
import { user } from "../../data/user";
import { daysSinceJoining } from "../../helpers/helpers";

const Summary: React.FC = () => {
  const { name, title, location, joinDate } = user;

  return (
    <div className="summary" data-testid="summary">
      <div className="summary__user">
        <div className="summary__user__info">
          <div className="summary__user__info__image__container">
            <img
              src={photo}
              alt="user"
              className="summary__user__info__image"
              data-testid="user-image"
            />
          </div>
          <div className="summary__user__info__details">
            <p
              className="summary__user__info__details__name"
              data-testid="user-name"
            >
              {name}
            </p>
            <p
              className="summary__user__info__details__title"
              data-testid="user-title"
            >
              {title}
            </p>
          </div>
        </div>
        <div className="summary__user__stats">
          <div data-testid="user-days-since-joining">
            {daysSinceJoining(joinDate)} days here
          </div>
          <div data-testid="user-location">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
