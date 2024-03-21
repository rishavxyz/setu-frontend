import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { SECRET_ID } from '$env/static/private';

export const load: PageServerLoad = async ({cookies, fetch}) => {
  const user = cookies.get('user') ?? null;
  console.log(user)

  return {
    user: JSON.parse(user ?? '')
  }
};