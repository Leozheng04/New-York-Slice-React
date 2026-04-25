const Gallery = () =>{
    return(
        <>
`        // Gallery section 
        <section class="gallery-section" id = "gallery-section">
            <div class="gallery-wrapper">
                <h1 id = "gallery-title">Photo Gallery</h1>
                <p class="gallery-subtitle">A closer look at our fresh slices, kitchen, and signature pizzas.</p>
                <div class="slider">
                    <input type="radio" name="slide" id="img1" checked>
                    <input type="radio" name="slide" id="img2">
                    <input type="radio" name="slide" id="img3">
                    <input type="radio" name="slide" id="img4">
                    <input type="radio" name="slide" id="img5">
                    <input type="radio" name="slide" id="img6">
                    <div class="images">
                        <img src="images/SliderPhoto/1.jpg" class = "m1" alt="image1">
                        <img src="images/SliderPhoto/2.jpg" class = "m2" alt="image2">
                        <img src="images/SliderPhoto/3.jpg" class = "m3" alt="image3">
                        <img src="images/SliderPhoto/4.jpg" class = "m4" alt="image4">
                        <img src="images/SliderPhoto/5.jpg" class = "m5" alt="image5">
                        <img src="images/SliderPhoto/6.jpg" class = "m6" alt="image6">
                    </div>
                    <div class="dots">
                        <label for="img1"></label>
                        <label for="img2"></label>
                        <label for="img3"></label>
                        <label for="img4"></label>
                        <label for="img5"></label>
                        <label for="img6"></label>
                    </div>
                    <div class="arrows arrow1">
                        <label for="img6" class = "prev">&#10094;</label>
                        <label for="img2" class ="next">&#10095;</label>
                    </div>
                    <div class="arrows arrow2">
                        <label for="img1" class = "prev">&#10094;</label>
                        <label for="img3" class ="next">&#10095;</label>
                    </div>
                    <div class="arrows arrow3">
                        <label for="img2" class = "prev">&#10094;</label>
                        <label for="img4" class ="next">&#10095;</label>
                    </div>
                    <div class="arrows arrow4">
                        <label for="img3" class = "prev">&#10094;</label>
                        <label for="img5" class ="next">&#10095;</label>
                    </div>
                    <div class="arrows arrow5">
                        <label for="img4" class = "prev">&#10094;</label>
                        <label for="img6" class ="next">&#10095;</label>
                    </div>
                    <div class="arrows arrow6">
                        <label for="img5" class = "prev">&#10094;</label>
                        <label for="img1" class ="next">&#10095;</label>
                    </div>
                </div>
            </div>
    
        </section>
        </>
    )
}
export default Gallery;