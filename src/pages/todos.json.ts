import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify(['Buy the milk', 'Do the next lesson']));
};

export const POST: APIRoute = async ({ request }) => {
  console.log(request.headers);
  console.log(await request.json());
  return new Response();
};
