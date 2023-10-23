export function getStrapiURL(path = "") {
  // return `${"https://dom-rem-blogs.herokuapp.com"}${path}`;
  return `${"http://ec2-65-2-83-92.ap-south-1.compute.amazonaws.com"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

// process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
