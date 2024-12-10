import React, { useEffect, useState } from "react";
import { getData, deleteData, postData } from "./api/PostApi";
import { Card } from "./components/Card";
import Form from "./components/Form";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updateDataApi, setUpdateDataApi] = useState({});

    const getRealData = async () => {
        try {
            const res = await getData();
            setPosts(res.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRealData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await deleteData(id);
            if (res.status === 200) {
                const afterDeletedPosts = posts.filter((curPost) => curPost.id !== id);
                setPosts(afterDeletedPosts);
            } else {
                console.error("Failed to delete post:", res);
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const handleUpdatePost = (curPost) => {
        setUpdateDataApi(curPost);
    };

    const handleAddPost = async (newPost) => {
        try {
            const res = await postData(newPost);
            if (res.status === 201) {
                setPosts([res.data, ...posts]);
            }
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <Form
                setPosts={setPosts}
                updateDataApi={updateDataApi}
                setUpdateDataApi={setUpdateDataApi}
                handleAddPost={handleAddPost}
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        post={post}
                        handleDelete={handleDelete}
                        handleUpdatePost={handleUpdatePost}
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;









