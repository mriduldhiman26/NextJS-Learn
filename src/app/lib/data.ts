import { createClient, sql } from '@vercel/postgres';

export async function connectToDb()
{
    const client= createClient();
    await client.connect();

    try{
        if(client)
        {
            console.log("Connected to Database");
            return client;
        }

    }
    catch(error)
    {
        console.log('Error connecting database ',error);

    }
}

export async function getPosts(client:any)
{
    try{
        const result = await client.sql `SELECT * FROM posts LIMIT 2`;
        return result.rows;
    }
    catch(error)
    {
        console.log('Error fetching posts ',error);
        throw error;
    }
}
