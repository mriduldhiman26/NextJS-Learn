import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
export default function Page(){

    return(
        <>
        <h1> POSTS</h1> <hr/>

        <h2>Welcome to Blog Post page</h2>

    {posts.map((post)=> (
            <Post
             content={post.content}
             date={post.date}
             id={post.id}
             title={post.title}
             />
            ))}
             
        
       
        </>
    );
}