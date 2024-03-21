import type { Actions } from "./$types";

type UserData = {

      name: string; email: string; linkedinUrl: string;
      bio: string;
}

export const actions: Actions = {
  async default({request, cookies}) {
    const data = await request.formData();
    const entry = Object.fromEntries(data) as UserData
  }
};