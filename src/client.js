import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: '9hon9y3a',
  dataset: "production",
  apiVersion: "2022-04-10",
  useCdn: true,
  token: 'sk0Mc8hLoQr0sPPIFeuqSk2uuFcsb2FZzthwK7lWXe7OgWuXT2KDfH5QcHxP8S3Hqc8RHzGLNECdcfigAK9q7fuStjSXGCdewExBgI6nYLdBPLDQAtQof26z2uuPXS65Zkl5O1psQDe3gFUbuk13IitlBMPj3WB5iyjt6oRNys0OUaZN9Im9'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
