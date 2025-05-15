import Button from './Button';

function Banner(props) {
  return (
    <section className="banner">
      <div className="container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="button-group">
          <Button text={props.primaryText} variant="primary" />
          <Button text={props.secondaryText} variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default Banner;

