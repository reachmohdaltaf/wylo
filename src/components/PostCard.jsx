import {
  Edit,
  EllipsisVertical,
  MessageCircle,
  MessagesSquare,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../features/PostSlice";
import CommentCard from "./CommentCard";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCommentExpand, setIsCommentExpand] = useState(false);

  const handleEdit = () => {
    const newText = prompt("Edit Your Post", post.text);
    if (newText) {
      dispatch(editPost({ id: post.id, text: newText }));
    }
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className="card  border-base-content/40 border shadow shadow p-4">
      <div className="profileimage flex justify-between">
        <div className="flex gap-3">
          <img
            src="https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78="
            className="h-10 w-10 bg-red-200 rounded-full"
            alt="Profile"
          />
          <div className="flex flex-col leading-5">
            <h3 className="">Anonymous</h3>
            <p className="text-xs text-base-content/70">
              Web developer (React & Node)
            </p>
          </div>
        </div>
        <div className="dropdown dropdown-start  md:mr-0 mr-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-md rounded-md cursor-pointer p-0 m-1"
          >
            <EllipsisVertical size={20} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 "
          >
            <li>
              <button onClick={handleDelete}>
                <Trash2 /> <span className="hidden md:inline">Delete</span>
              </button>
            </li>
            <li>
              <button onClick={handleEdit}>
                <Edit /> <span className="hidden md:inline">Edit</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <div>
          <p
            className={`break-words text-sm whitespace-pre-wrap w-full ${
              isExpanded ? "" : "line-clamp-2"
            }`}
          >
            {post.text}
          </p>
          {post.text.length > 100 && (
            <button
              className="text-blue-600 cursor-pointer "
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        {post.image && (
          <div className="flex items-center justify-center">
            <img
              src={post.image}
              alt=""
              className="w-full max-h-80 object-contain mt-2"
            />
          </div>
        )}
      </div>
      <div className="mt-2 flex items-end card">
        <MessageCircle
          onClick={() => setIsCommentExpand(!isCommentExpand)}
          className="cursor-pointer"
          size={24}
        />
      </div>
      {isCommentExpand && (
        <div className="w-full bg-base-200 p-1 rounded-md mt-3">
          <input
            type="text"
            placeholder="Add Your Comment Here"
            className="input w-full input-ghost"
          />
          <div className="all-comments mt-1">
            <CommentCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
