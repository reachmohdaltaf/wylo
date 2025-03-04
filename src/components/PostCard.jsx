import { Edit, Image, MessageCircle, ThumbsUp, Trash2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, deletePost, editPost } from "../features/PostSlice";
import CommentCard from "./CommentCard";

const PostCard = ({ post }) => {
  const imageRef = useRef(null)
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCommentExpand, setIsCommentExpand] = useState(false);
  const [comment, setComment] = useState("");
  const [editedText, setEditedText] = useState(post.text);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed to upload");
        return; // Exit if the file is not an image
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleEdit = () => {
    dispatch(editPost({ id: post.id, text: editedText, image: selectedImage }));
    document.getElementById("edit-modal").close();
  };

  return (
    <div className="card bg-base-200 shadow p-4">
      <div className="profileimage flex bg-base-100 p-4 justify-between">
        <div className="flex  gap-3">
          <img
            src="https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78="
            className="h-10 w-10 bg-base-100  rounded-full"
            alt="Profile"
          />
          <div className="flex flex-col leading-5">
            <h3>Anonymous</h3>
            <p className="text-xs text-base-content/70">Web developer (React & Node)</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Trash2 onClick={() => dispatch(deletePost(post.id))} className="cursor-pointer " />
         
            <Edit className="cursor-pointer"  onClick={() => document.getElementById("edit-modal").showModal()} />
         

          <dialog id="edit-modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit the Post</h3>
              <input
                type="text"
                className="input border border-primary input-ghost w-full mt-2"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                className="mt-4 hidden file-input"
                onChange={handleImageChange}
                ref={imageRef}
              />
             <button  onClick={()=>imageRef.current.click()} className="btn mt-3 py-10 p-4"> <Image size={40} className=" cursor-pointer text-primary"/></button>
              {selectedImage && (
                <img src={selectedImage} alt="Preview" className="w-full max-h-40 mt-2 object-contain" />
              )}
              <div className="flex gap-2 mt-4">
                <button onClick={handleEdit} className="btn btn-neutral">Save</button>
                <button
                  className="btn btn-secondary"
                  onClick={() => document.getElementById("edit-modal").close()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className="">
        <p className={`break-words bg-base-100 py-4 px-2 text-sm whitespace-pre-wrap w-full ${post.text.length > 100 && !isExpanded ? "line-clamp-2" : ""}`}>
          {post.text}
        </p>
        {post.text.length > 100 && (
          <button className="text-blue-600 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        {post.image && (
          <div className="flex bg-base-100 p-4 items-center justify-center">
            <img src={post.image} alt="Post" className="w-full max-h-80 object-contain mt-2" />
          </div>
        )}
      </div>

      {/* Comment Section */}
      <div className="mt-2 gap-5 flex items-end ">
              <ThumbsUp/>
        <MessageCircle onClick={() => setIsCommentExpand(!isCommentExpand)} className="cursor-pointer" size={24} />
      </div>

      {isCommentExpand && (
        <div className="w-full  bg-base-200 p-1 rounded-md mt-3">
        <div className="flex items-center gap-2 justify-between">
        <input
            type="text"
            placeholder="Add Your Comment Here"
            className="input w-full input-ghost "
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={() => dispatch(addComment({ postId: post.id, comment }))} className="btn ">
            Add Comment
          </button>
        </div>
          <div className="all-comments mt-2">
            {post.comments && post.comments.map((c, index) => <CommentCard key={index} comment={c} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
