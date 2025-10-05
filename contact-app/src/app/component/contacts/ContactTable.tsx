import { isEvenColorBG } from "../../helpers/table";
import { Contact } from "../../hooks/useGetContactList";
import { FaPen } from "react-icons/fa";

type ContactTableProps = {
    contacts: Contact[];
}

const ContactTable = ({ contacts }: ContactTableProps) => {
    return (
        <div className="rounded-3xl border border-[#e2eef6] overflow-auto">
            <table className="min-w-full text-sm">
                <thead className="bg-[#f0f5fb]">
                    <tr>
                        <th className="p-4 text-left">ID</th>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Email</th>
                        <th className="p-4 text-left">Phone</th>
                        <th className="p-4 text-left">Contact type</th>
                        <th className="p-4 text-left">Portal Access</th>
                        <th className="p-4 text-left">Admin Access</th>
                        <th className="min-w-[150px]"></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, i) => (
                        <tr key={contact._id} className={`text-left h-9 text-xs` + isEvenColorBG(i)}>
                            <td className="px-4">{contact.contactId}</td>
                            <td className="px-4">{contact.name}</td>
                            <td className="px-4">{contact.email}</td>
                            <td className="px-4">{contact.phone}</td>
                            <td className="px-4">
                                <div className="flex items-center space-x-2">
                                    <p>{contact.contactType}</p>
                                    <FaPen className="text-white w-4 h-auto text-xs rounded-full cursor-pointer bg-[#2c6aa3] " />
                                </div>
                            </td>
                            <td className="px-4">
                                <input
                                    type="checkbox"
                                    checked={contact.portalAccess}
                                    readOnly
                                />
                            </td>
                            <td className="px-4">
                                <input
                                    type="checkbox"
                                    checked={contact.adminAccess}
                                    readOnly
                                    className="bg-gray-200"
                                />
                            </td>
                            <td className="px-4">
                                <button className="w-full text-[#2596be] border border-[#2596be] bg-white rounded-2xl">View Portal</button>
                            </td>
                        </tr>
                    ))}
                    {contacts.length < 10 &&
                        Array.from({ length: 10 - contacts.length }).map((_, idx) => {
                            const baseIndex = contacts?.length + idx + 1 // Adjust index to continue pattern

                            return (
                            <tr
                                className={
                                ` text-center h-9  ` +
                                isEvenColorBG(baseIndex)
                                }
                                key={`empty-${idx}`}
                            >
                                <td
                                colSpan={8}
                                className=" text-right text-sm font-medium "
                                ></td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default ContactTable;