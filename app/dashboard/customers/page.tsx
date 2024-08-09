import {lusitana} from "@/app/ui/fonts";
import {fetchFilteredCustomers} from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page({
       searchParams,
   }: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const customers = await fetchFilteredCustomers(query);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customer</h1>
            </div>
            <CustomersTable customers={customers}></CustomersTable>
        </div>
    );
}