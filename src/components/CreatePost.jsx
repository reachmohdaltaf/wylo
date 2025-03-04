import { Image, Meh, Smile, X } from "lucide-react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearImagePreview,
  setImagePreview,
} from "../features/imagePreviewSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addPost, editPost } from "../features/PostSlice";

const CreatePost = () => {
  const imageRef = useRef(null);
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();
  const imagePreview = useSelector((state) => state.image.imagePreview);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setImagePreview(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      text: text.trim(),
      image: imagePreview,
    };
    console.log(newPost);

    dispatch(addPost(newPost));
    setText("");
    dispatch(clearImagePreview());
  };

  return (
    <div className="py-3">
      <form
        onSubmit={handleSubmit}
        className="card border border-base-content/40 bg-base-100 shadow p-4"
      >
       <div className="flex w-full gap-2 ">
       <div className="profilephoto bg-base-200 object-contain w-10 h-10 rounded-3xl">
            <img src="https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78=" className="w-10 h-10 rounded-full" alt="" />
            </div>
            <textarea
              name=""
              id=""
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Create a post..."
              className="outline-none w-[90%] textarea-neutral rounded-md  bg-base-200 p-4 textarea-lg"
            />
       </div>

        <div className="flex items-center justify-between mt-3 ">
         <div className="flex gap-2 ">
         <Image
            size={24}
            className="text-primary cursor-pointer"
            onClick={() => {
              imageRef.current.click();
            }}
          />
          <Smile className="text-primary cursor-pointer"/>
         </div>
          <input
            type="file"
            ref={imageRef}
            className="file-input file-input-ghost hidden"
            onChange={handleFileChange}
          />
          <button type="submit" className=" rounded-md btn btn-primary">
            Post
          </button>
        </div>
        {imagePreview && (
          <div className="flex relative items-center justify-center bg-base-300 py-5 mt-3">
            <button
              onClick={() => dispatch(clearImagePreview())}
              className="absolute top-3 right-10 cursor-pointer"
            >
              <X />
            </button>
            <img src={imagePreview} className="w-72 h-72  " alt="" />
          </div>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
