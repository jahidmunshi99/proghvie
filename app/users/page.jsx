import TopActionModal from "./component/TopActionModal.js";
// import UserForm from "./component/UserForm.js";
import UsersTable from "./component/UsersTable.js";

// import SeedBedForm from "./components/forms/SeedBedForm.js";

const Users = () => {
  return (
    <div className="px-[5%] py-10 dark:bg-black">
      <main className="bg-white dark:bg-black sm:items-start">
          <TopActionModal/>
        <div className="mt-5">
          <UsersTable/>
        </div>
      </main>
    </div>
  );
};

export default Users;
