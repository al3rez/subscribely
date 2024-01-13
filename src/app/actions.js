"use server";

import { sql } from "@vercel/postgres";

export async function createListing(formData) {
  const email = formData.get("email");
  const website_url = formData.get("website_url");
  const { rows: rows } =
    await sql`INSERT INTO submissions (email, website_url) VALUES (${email}, ${website_url})`;
}
