import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ui/Card.css';

const Card = ({ title, description, image, stack, links, type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="card-image">
        <img src={image} alt={title} />
        {type === 'design' && (
          <div className="card-overlay">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="stack">
              {stack.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
            <div className="links">
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      {type === 'development' && (
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="stack">
            {stack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="links">
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  type: PropTypes.oneOf(['development', 'design']).isRequired,
};

export default Card;