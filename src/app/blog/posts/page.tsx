import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
import { connectToDb, getPosts } from '@/app/lib/data';

export default async function Page(){

    const client= await connectToDb();
    const posts = await getPosts(client);

    return(
        <>
        <h2>Welcome to Blog Post page</h2>

    {posts?.map((post:any)=> (
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