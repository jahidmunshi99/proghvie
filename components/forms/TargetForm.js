"use client";

import { useForm } from "react-hook-form";
import { addTarget } from "../../app/utils/db.js";
import { useCropList } from "../../app/utils/useCropList.js";
import { useAllData } from "../../app/utils/useData.js";
import { useFinancialYear } from "../../app/utils/useFinancialYear.js";
import CloseButton from "../../components/buttons/CloseButton.js";
import SubmitButton from "../../components/buttons/SubmitButton.js";

const TargetFrom = ({ handleClose }) => {
  const { divisions, districts, upazilas, categorys } = useAllData();
  const { crops } = useCropList();
  const { fyear } = useFinancialYear();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "seedbed",
      createdBy: "admin",
      crop_name: "",
      crop_session: "",
      crop_type: {
        hybrid: "",
        hyv: "",
        local: "",
      },
      districtId: "",
      divisionId: "",
      f_year: "",
      upazilaId: "",
      createdAt: new Date().toDateString(),
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    await addTarget(data);
    reset();
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Crops Target</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Financial Year & Session */}
          <div className="grid grid-cols-2 gap-4">
            <select
              {...register("f_year", { required: true })}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">Select Financial Year</option>
              {fyear?.map((item) => (
                <option key={item.f_year} value={item.f_year}>
                  {item.f_year}
                </option>
              ))}
            </select>

            <select
              {...register("crop_session", { required: true })}
              className="w-full border px-4 py-2 rounded-lg capitalize"
            >
              <option value="">Select Session</option>
              <option value="kharif-1">Kharif-1</option>
              <option value="kharif-2">Kharif-2</option>
              <option value="robi">Robi</option>
            </select>
          </div>

          {/* Location */}
          <div className="grid grid-cols-3 gap-4">
            <select {...register("divisionId")} className="border px-4 py-2 rounded-lg capitalize">
              <option value="">Division</option>
              {divisions?.map((item) => (
                <option key={item.divisionId} value={item.divisionId}>
                  {item.divisionId}
                </option>
              ))}
            </select>

            <select {...register("districtId")} className="border px-4 py-2 rounded-lg capitalize">
              <option value="">District</option>
              {districts?.map((item) => (
                <option key={item.districtId} value={item.districtId}>
                  {item.districtId}
                </option>
              ))}
            </select>

            <select {...register("upazilaId")} className="border px-4 py-2 rounded-lg capitalize">
              <option value="">Upazila</option>
              {upazilas?.map((item) => (
                <option key={item.upazilaId} value={item.upazilaId}>
                  {item.upazilaId}
                </option>
              ))}
            </select>
          </div>

          {/* Crop & Category */}
          <div className="grid grid-cols-2 gap-4">
            <select {...register("crop_name")} className="border px-4 py-2 rounded-lg capitalize">
              <option value="">Select Crop</option>
              {crops?.map((item) => (
                <option key={item.cropId} value={item.cropId}>
                  {item.cropId}
                </option>
              ))}
            </select>

            <select {...register("category")} className="border px-4 py-2 rounded-lg capitalize">
              <option value="">Select Category</option>
              {categorys?.map((item) => (
                <option key={item.category} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>
          </div>

          {/* Nested Crop Type */}
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Hybrid Target"
              {...register("crop_type.hybrid")}
              className="border px-4 py-2 rounded-lg"
            />

            <input
              type="text"
              placeholder="HYV Target"
              {...register("crop_type.hyv")}
              className="border px-4 py-2 rounded-lg"
            />

            <input
              type="text"
              placeholder="Local Target"
              {...register("crop_type.local")}
              className="border px-4 py-2 rounded-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <CloseButton handleClose={handleClose} />
            <SubmitButton />
          </div>

        </form>
      </div>
    </div>
  );
};

export default TargetFrom;