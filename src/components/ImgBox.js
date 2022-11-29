function ImgBox({ src, alt, src2, name, display }) {
  // console.dir(name);
  return (
    <div className={name} style={{ display: display }}>
      <div className="img-size">
        <img className="img-box" src={src} alt={alt} />
      </div>
      <div className="img-size">
        <img className="img-box" src={src2} alt={alt} />
      </div>
    </div>
  );
}

export default ImgBox;
