import washington from "../assets/washington-dc.png"
import art from "../assets/local-art-exhibit.png"
import coding from "../assets/coding-project-schedule-biulder.jpg"
import blocks from "../assets/hobby-block.png"

function Gallery() {
    const images = [washington, art, coding, blocks];

    return (
        <>


            <h2>Gallery</h2>


            <article className="gallery">
                {
                    images.map((image) =>
                        <figure>
                            <img src={image} alt="" title="" />
                        </figure>
                    )
                }
            </article>


        </>
    )
}

export default Gallery;