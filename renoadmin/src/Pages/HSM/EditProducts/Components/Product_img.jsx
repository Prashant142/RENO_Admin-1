import React, { useState } from "react";
import attachment from "../../../CRM/MemberDetails/attachment.png";

const Product_img = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState(null);

  const handleGalleryImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file) => URL.createObjectURL(file));
    setGalleryImages(selectedImages);
  };

  const handleThumbnailImageUpload = (e) => {
    const file = e.target.files[0];
    const imagePreview = URL.createObjectURL(file);
    setThumbnailImage(imagePreview);
  };

  const handleImageClick = () => {
    // Handle the click event if needed
  };

  return (
    <div>
      <div className="bg-[#EEEEEE] p-5 rounded-md shadow-md w-[80vh] border">
        <p className="pb-5">Product Information</p>
        <hr />
        <form className="pt-5 flex flex-col gap-5" action="submit">
          <div className="flex flex-row gap-20">
            <label>Gallery Images (600x600), (max:8) :</label>
            <div className="flex flex-wrap gap-4">
              {galleryImages.length > 0 ? (
                galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full"
                    onClick={handleImageClick}>
                    <img src={image} className="w-full h-full" alt="upload" />
                  </div>
                ))
              ) : (
                <div className="bg-white p-10 flex flex-col justify-center items-center cursor-pointer shadow-lg rounded-lg w-[40vh] h-[20vh]">
                  <label
                    htmlFor="gallery-upload"
                    className="text-black cursor-pointer px-4 py-4 rounded-none">
                    Upload Your Images
                  </label>
                  <img src={attachment} className="w-10 h-10" alt="upload" />
                </div>
              )}
              <input
                id="gallery-upload"
                type="file"
                multiple
                onChange={handleGalleryImageUpload}
                className="hidden"
              />
            </div>
          </div>
          <div className="flex flex-row gap-20">
            <label className="pr-2">Thumbnail Image (300x300) :</label>
            <div
              className="bg-white p-10 flex flex-col justify-center items-center cursor-pointer shadow-lg rounded-lg w-[45vh] h-[20vh]"
              onClick={handleImageClick}>
              {thumbnailImage ? (
                <img
                  src={thumbnailImage}
                  className="w-full h-full"
                  alt="upload"
                />
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <label
                    htmlFor="thumbnail-upload"
                    className="text-black cursor-pointer px-4 py-4 rounded-none">
                    Upload Your Image
                  </label>
                  <img src={attachment} className="w-10 h-10" alt="upload" />
                </div>
              )}
              <input
                id="thumbnail-upload"
                type="file"
                onChange={handleThumbnailImageUpload}
                className="hidden"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product_img;
