function Testimonials(props: any) {
  const { id, img, testimonial_text, testimonial_name } = props;
  return (
    <>
      <figure className="testimonial">
        <img
          key={id}
          className="testimonial-img"
          alt="Photo of customer Dave Bryson"
          src={`${img}`}
        />
        <blockquote className="testimonial-text">{testimonial_text}</blockquote>

        <p className="testimonial-name">&mdash;{testimonial_name}</p>
      </figure>
    </>
  );
}
export default Testimonials;
