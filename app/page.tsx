import CultivationTable from "./components/CultivationTable.js";
import ProductionTable from "./components/ProductionTable.js";
import SeedBedTable from "./components/SeedBedTable.js";
// import SeedBedForm from "./components/forms/SeedBedForm.js";

const Home = () => {
  return (
    <div className="px-[5%] py-10 dark:bg-black">
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
};

export default Home;
