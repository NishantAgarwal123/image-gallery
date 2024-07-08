import React from "react";

const imagecard = ({ image }) => {
  console.log(image);
  const tags = image.tags.split(",");
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="max-w-sm  shadow-lg">
        {/* <img src="https://source.unsplash.com/random" alt="image" /> */}
        <img src={image.largeImageURL} alt="image" />
        <div className="p-4 ">
          <h3 className=" text-indigo-500 font-medium">{image.user}</h3>
          <ul className="mt-2 font-semibold">
            <li>Views: {image.views}</li>
            <li>downloads: {image.downloads}</li>
            <li>Likes: {image.likes}</li>
          </ul>
          <div className="mt-4 flex gap-2 flex-wrap">
            {tags.map((tag,index) => (
              <p key={index} className=" inline font-medium bg-gray-300 rounded-2xl p-1 px-2">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default imagecard;
