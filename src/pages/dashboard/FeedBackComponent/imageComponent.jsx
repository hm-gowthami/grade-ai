const ImageComponent = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/img/exam-over.jpg`} alt="My Image" />
    </div>
  );
};

export default ImageComponent;
