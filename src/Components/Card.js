import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { constants } from "./Constants";
import { useState } from "react";
import './Card.css';

const SingleCard = ({ id, src, title, description, content, site }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ width: '330px' }} className="text-center" key={id}>
      <div className="imgContainer">
        <CardImg top src={src} alt="banner" className="image" />
      </div>
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-danger">
          {title}
        </CardTitle>
        <CardSubtitle
          className="text-secondary mb-3 font-weight-light"
          style={{ fontSize: '1.1rem' }}
        >
          {description}
        </CardSubtitle>
        <CardText
          className={`mb-4 text-start ${expanded ? 'expanded' : 'textTruncate'}`}
          style={{ fontSize: '0.9rem' }}
        >
          {content}
        </CardText>
        <Button color="primary" className="font-weight-bold mx-1" onClick={toggleDescription}>
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
        <Button color="success" className="font-weight-bold mx-1">
          <a className="text-decoration-none text-white" href={site} target="_blank" rel="noreferrer">
            View Site
          </a>
        </Button>
      </CardBody>
    </Card>
  );
};

const CardComponent = () => {
  return (
    <div className="d-flex justify-content-around mt-3 flex-wrap gap-3 mb-3">
      {constants.map(({ id, src, title, description, content, site }) => (
        <SingleCard
          key={id}
          src={src}
          title={title}
          description={description}
          content={content}
          site={site}
        />
      ))}
    </div>
  );
};

export default CardComponent;
