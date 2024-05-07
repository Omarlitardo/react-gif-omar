import { Gifitem } from "./Gifitem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category} </h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

//   const [images, setImages] = useState([]);

//   const getImages = async () => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
//   };

//   useEffect(() => {
//     getImages();
//   }, []);
