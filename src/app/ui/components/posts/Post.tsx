import React, { JSX } from 'react';
import Link from 'next/link';

interface postPRops{
id?: string;
title?: string;
content?: string;
date?: string;
}
export default function Component({ id, title, content, date }: postPRops) {
    return (
        <div key={id} className="border border-gray-200 p-4 my-4">
             <Link href={`/blog/post/${id}`}><h2>{title}</h2></Link>
            <p className="text-gray-500">{date}</p>
            <p>{content}</p>
        </div>
    );
}