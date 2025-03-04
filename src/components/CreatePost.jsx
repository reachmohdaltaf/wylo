import { Image, Locate, LocateIcon, Map, MapPin, Meh, Smile, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearImagePreview,
  setImagePreview,
} from "../features/imagePreviewSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "../features/PostSlice";
import EmojiPicker from "emoji-picker-react";

const CreatePost = () => {
  const imageRef = useRef(null);
  const emojiPickerRef = useRef(null); // Ref for Emoji Picker
  const [isEmojiPickerOpen, setisEmojiPickerOpen] = useState(false);
  const [text, setText] = useState("");

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

  const handleEmojiPicker = () => {
    setisEmojiPickerOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    const newPost = {
      id: nanoid(),
      text: text.trim(),
      image: imagePreview,
    };

    dispatch(addPost(newPost));
    setText("");
    dispatch(clearImagePreview());
  };

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setisEmojiPickerOpen(false);
      }
    };

    if (isEmojiPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEmojiPickerOpen]);

  return (
    <div className="py-3">
      <form
        onSubmit={handleSubmit}
        className="card bg-base-200 shadow p-2 md:p-4"
      >
        <div className="flex w-full items-center justify-between bg-base-100 p-4 ">
          <div className="profilephoto bg-base-400 object-contain w-20 h-20 rounded-3xl">
            <img
              src="https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78="
              className="w-12 mt-1 cursor-pointer h-12 rounded-full"
              alt=""
            />
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What is hapenning ?!"
            className="outline-none w-[100%] placeholder:text-xl textarea-neutral rounded-md bg-base-100 p-4 textarea-lg"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2">
            <Image
              size={24}
              className=" cursor-pointer  "
              onClick={() => imageRef.current.click()}
            />
             <MapPin size={24} className="cursor-pointer "/>
            <div className="relative" ref={emojiPickerRef}>
              <Smile
                onClick={handleEmojiPicker}
                className="  cursor-pointer"
              />
             
              {isEmojiPickerOpen && (
                <div className="absolute top-10 left-0 z-50">
                  <EmojiPicker
                    width="16em"
                    onEmojiClick={(emoji) =>
                      setText((prev) => prev + emoji.emoji)
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <input
            type="file"
            ref={imageRef}
            className="file-input file-input-ghost hidden"
            onChange={handleFileChange}
          />
          <button type="submit" className="rounded-md btn btn-neutral">
            Post
          </button>
        </div>

        {imagePreview && (
          <div className="flex relative items-center justify-center bg-base-300 py-5 mt-3">
            <button
              onClick={() => dispatch(clearImagePreview())}
              className="absolute top-3 md:right-10 right-1 cursor-pointer"
            >
              <X />
            </button>
            <div className="w-full md:w-72 h-full md:h-72 flex items-center justify-center overflow-hidden border rounded-lg">
              <img
                src={imagePreview}
                className="w-full h-full object-cover"
                alt="Preview"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
