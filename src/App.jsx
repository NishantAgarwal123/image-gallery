import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Imagecard from "./components/Imagecard";
import Searchimage from "./components/Searchimage";
function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [term]);
  
  return (
    <>
      <Searchimage
        searchText={(text) => {
          setIsloading(true);
          setTerm(text);
        }}
      />

      {!isloading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {isloading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="container mx-auto px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-fit ">
          {images.map((image) => (
            <Imagecard key={image.id} image={image} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
