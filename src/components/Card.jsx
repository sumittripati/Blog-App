import React from "react";

export const Card = ({ post, handleDelete, handleUpdatePost }) => {
    const { title, id, body } = post;

    return (
        <li className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md hover:bg-gray-100 flex flex-col justify-between">
            <div>
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{body}</p>
            </div>
            <div className="mt-auto flex space-x-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition"
                    onClick={() => handleUpdatePost(post)} // Pass the current post to the handler
                >
                    Edit
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition"
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};



