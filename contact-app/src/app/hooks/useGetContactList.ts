import { API_URL_CONTACTS } from "../helpers/constants";

export interface ReturnData {
  data: Contact[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
export interface Contact {
  _id: string;
    contactId: string;
  name: string;
  email: string;
  phone: string;
  contactType: string;
  portalAccess: boolean;
  adminAccess: boolean;
}

export async function useGetContacts(page: number, search?: string): Promise<ReturnData> {
  try {
    const res = await fetch(`${API_URL_CONTACTS}/?page=${page}${search ? `&search=${search}` : ""}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch contacts: ${res.status} ${res.statusText}`);
    }

    const result = await res.json() as ReturnData;
    return result;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error; // rethrow so caller (UI) can handle it
  }
}
