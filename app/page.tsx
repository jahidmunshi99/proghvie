import CultivationTable from "./components/CultivationTable.js";
import ProductionTable from "./components/ProductionTable.js";
import SeedBedTable from "./components/SeedBedTable.js";
import TopActionModal from "./components/TopActionModal.js"
// import SeedBedForm from "./components/forms/SeedBedForm.js";

const Home = () => {
  return (
    <div className="px-[5%] py-10 dark:bg-black">
      <main className="bg-white dark:bg-black sm:items-start">
<TopActionModal/>
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
