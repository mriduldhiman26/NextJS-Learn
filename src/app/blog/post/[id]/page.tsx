import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

interface pageProps {
    params: {
        id?: string;
    }

}
export default function Page({ params }: pageProps) {

    const post = posts.find((post) => post.id === params.id);

    return (
        <>
            <Post {...post} />
        </>

    );
}
