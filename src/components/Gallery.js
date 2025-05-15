/*
  Gallery component receives a list of images via props
  and displays the first 4 in a responsive row layout.
*/

function Gallery(props) {
  return (
    <section className="gallery">
      <div className="container flex gallery-row">
        {props.list.slice(0, 4).map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.poster} alt={item.title} className="gallery-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
