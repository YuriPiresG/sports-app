"use server";

import { schema } from "@/components/dialogForm";
import { Sport } from "@/components/sportsTable";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

const API = process.env.API_CONNECTION;

export const createSport = async (formData: z.infer<typeof schema>) => {
  const response = await fetch(API + "/sport", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  revalidateTag("sports");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getSports = async () => {
  const response = await fetch(API + "/sport", {
    next: { tags: ["sports"] },
  });
  if (!response.ok) {
    return undefined;
  }
  const data: Sport[] = await response.json();
  return data;
};

export const getSportById = async (id: string) => {
  const response = await fetch(API + `/sport/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Sport = await response.json();
  return data;
};

export const deleteSportById = async (id: string) => {
  const response = await fetch(API + `/sport/${id}`, {
    method: "DELETE",
  });

  revalidateTag("sports");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
