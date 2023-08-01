import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '9grp0h9l',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skl8PC7vCmoun2Rcwv5dNvNIA02T39dmpLCaD5txDYX03ooV4OAihpB2zMNskUqXrrGpuXZaNBZzmNZ4hPZBdZi7FqhOLp3diN9BYXm4zmqSbw13MR96ZljNJyfIJZZU1SX7vv8i92je23WrcoosNLxqKbroGx94nvneQaoO8UlTrM02qhUO',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);