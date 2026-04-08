import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
import { connectToDb } from '@/app/lib/data';

export default async function Page(){

    const client= await connectToDb();
    
    return(
        <>
        {client && <p className="text-green-500">Connected to Database</p> }
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