import React from "react";

const Summary = () => {
  return (
    <div className="summary" data-testid="summary">
      <div className="summary__user">
        <div className="summary__user__info">
          <div className="summary__user__info__image__container">
            <img src="" alt="user" data-testid="user-image" />
          </div>
          <div className="summary__user__info__details">
            <p
              className="summary__user__info__details__name"
              data-testid="user-name"
            >
              miku86
            </p>
            <p
              className="summary__user__info__details__title"
              data-testid="user-title"
            >
              Fullstack Developer
            </p>
          </div>
        </div>
        <div className="summary__user__stats">
          <div data-testid="user-streak">1.000 days streak</div>
          <div data-testid="user-location">Stuttgart, Germany</div>
          <div data-testid="user-joindate">Joined October 2019</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
