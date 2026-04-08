import { createClient } from '@vercel/postgres';

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