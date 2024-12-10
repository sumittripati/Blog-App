import React, { useEffect, useState } from "react";

const Form = ({ setPosts, updateDataApi, setUpdateDataApi, handleAddPost }) => {
    const [addData, setData] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        if (updateDataApi && updateDataApi.id) {
            setData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            });
        }
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (updateDataApi.id) {
            // Handle Update
            const updatedPost = {
                ...updateDataApi,
                title: addData.title,
                body: addData.body,
            };

            // Update the post in state
            const updatedPosts = setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === updatedPost.id ? updatedPost : post
                )
            );

            // Reset the form and updateDataApi
            setData({ title: "", body: "" });
            setUpdateDataApi({});

            console.log("Updated Post:", updatedPost);
        } else {
            // Handle Add new Post
            handleAddPost(addData);
        }
    };

    return (
        <form className="mb-6" onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title" className="block mb-2 font-medium">
                    Title
                </label>
                <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="body" className="block mb-2 font-medium">
                    Body
                </label>
                <input
                    type="text"
                    autoComplete="off"
                    id="body"
                    name="body"
                    placeholder="Add Post"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition"
            >
                {updateDataApi.id ? "Update" : "Add"}
            </button>
        </form>
    );
};

export default Form;




