"use client";

import { useCallback, useEffect, useState } from "react";
import { Contact, useGetContacts } from "../hooks/useGetContactList";
import ContactTable from "../component/contacts/ContactTable";
import TableFooter from "../component/contacts/TableFooter";
import FilterBar from "../component/contacts/FilterBar";
import debounce from "lodash.debounce";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
    const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const callApi = useCallback(async (page: number, searchData?: string) => {
    useGetContacts(page, searchData)
        .then((data) => {
            setLoading(false);
            setContacts(data.data);
            setPagination(data.pagination);
        })
        .catch((err) => {
            setLoading(false);
            console.error("Error fetching contacts:", err);
        });
  }, []);
  useEffect(() => {
    callApi(pagination.page);
  }, [callApi, pagination.page]);

const onPaginationChange = useCallback((page: number) => {
    setLoading(true);
    setPagination((prev) => ({ ...prev, page }));
    // Fetch new page data here if API supports pagination
    callApi(page);
}, [callApi]);

const debouncedSearch = debounce((value: string) => {
    setPagination((prev) => ({ ...prev, page: 1 })); // reset to page 1 when searching
    callApi(1, value);
  }, 1000); 

  // handle search input
  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
  };


  if (loading) return <p>Loading contacts...</p>;

  return (
        <div className=" w-full">
            <h1 className="text-2xl font-bold ">Contacts</h1>
            <p className="text-[#eb4563] font-bold capitalize">here your summary</p>
            {/* filter bar */}
            <FilterBar onSearch={handleSearchChange} />
            {/* table */}
            <div className="mt-8">
                <ContactTable contacts={contacts} />
                {/* footer */}
                <div className="mt-4">
                <TableFooter pagination={pagination} setPage={onPaginationChange} />

                </div>
            </div>
        </div>
  );
}
