import sanityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url'

//Configuring sanity client for accesing their services
export const client = sanityClient({
    projectId:'54liyn8t',
    dataset:'production',
    apiVersion:'2022-09-25',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source);