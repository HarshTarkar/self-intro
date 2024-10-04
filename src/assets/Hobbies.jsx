const images = import.meta.glob('/src/images/*.{png,jpg,jpeg,svg}', { eager: true });

function Hobbies() {

    const imageList = Object.values(images).map((image, index) => (
        <img key={index} src={image.default} alt={`Image ${index + 1}`} className="galleryImg" />
      ));

    return (
        <div className="hobbies">
            <h3>I create AI art for fun</h3>
            <div className="img-container">
                {imageList}
            </div>
        </div>
    )
}

export default Hobbies;