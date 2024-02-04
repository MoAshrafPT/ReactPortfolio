import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import axios from "axios"
import parse from "html-react-parser";


function Posts() {
  const [posts, setPosts] = useState("");
  useEffect( () =>{
    const result = axios.get("https://raw.githubusercontent.com/MoAshrafPT/BlogPosts/main/posts.txt").then((res)=>{
        console.log(res.data);
        setPosts(res.data);
    }).catch(err => console.log(err))
    document.title = "Posts"
  },[]
  );
  return (
    <>
      <AppBar />
      <h3 style={{ textAlign: "center", marginTop: "100px" }}>Posts</h3>
      <section>
        <p>
            {parse(posts)}
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Posts;
