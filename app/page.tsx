import CultivationTable from "./components/CultivationTable.js";
import ProductionTable from "./components/ProductionTable.js";
import SeedBedTable from "./components/SeedBedTable.js";
// import SeedBedForm from "./components/forms/SeedBedForm.js";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl">Wellcome to Home Page</h1>
        <div className="mt-5">
          <button className="bg-black py-2 px-4 border rounded-full text-white cursor-pointer">
            Add New
          </button>
        </div>
        <div className="mt-5">
          <SeedBedTable />
          <CultivationTable />
          <ProductionTable />
          {/* <SeedBedForm /> */}
        </div>
      </main>
    </div>
  );
}
