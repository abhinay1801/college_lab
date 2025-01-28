import React from "react";

const Name = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
        <div className="text-center">
          <h1 className="text-lg font-bold">CVR COLLEGE OF ENGINEERING</h1>
          <p className="text-sm">An UGC Autonomous Institution | Affiliated to JNTUH</p>
          <p className="text-sm">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
          <h2 className="text-lg font-bold mt-4">AWARD LIST (LABORATORY)</h2>
        </div>

        

        <div className="flex flex-col gap-2 mt-6">
          <div className="flex gap-7 w-full">
            <div>
            <label className=" inline text-sm font-semibold ">Name of Exam:</label>
            <input
              type="text"
              className="text-sm w-[450px] border-b focus:outline-none border-black inline-block"
            />
            </div>
            <div className="flex ">
            <label className=" inline text-sm font-semibold ">(Reg./Supp)Month:</label>
            <input
              type="text"
              className="  pl-2 text-sm w-[200px] border-b focus:outline-none border-black inline-block"
            />
            <label className=" inline text-sm font-semibold ">20</label>
            <input
              type="text"
              className="  pl-2 text-sm w-[50px] border-b focus:outline-none border-black inline-block"
            />
            </div>
          </div>
          <div className="mt-3">
            <label className=" inline text-sm font-semibold">Branch & Section:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[670px] border-b focus:outline-none border-black inline-block"
            />
            <label className=" pl-2 inline text-sm font-semibold">Regulation:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[80px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div className="flex mt-3 gap-2">
          <div>
            <label className="text-sm font-semibold">Name of Lab:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[400px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Date of Examination:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[130px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Max.Marks:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[60px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          </div>
          <div className=" gap-1 flex mt-3 ">
            <label className="text-sm font-semibold">Name & College of External Examiner:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[700px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div className="flex gap-1 mt-3">
            <label className="text-sm font-semibold">Name of Internal Examiner:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[752px] border-b focus:outline-none border-black inline-block"
            />
          </div>
        </div>
        <div className="mt-4 text-sm flex">
          <p className="font-bold">Note:</p>
          <ol className="ml-6">
            <li>1) Please enter the marks in the serial order of the Hall Ticket Numbers of the students.</li>
            <li>2) The award list must be submitted to the Controller of Examinations along with the Statement of Attendance.</li>
          </ol>
        </div>
        <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-1">S. No.</th>
              <th className="border border-gray-300 p-1">Hall Ticket Number</th>
              <th className="border border-gray-300 p-1">Program 1 Executed</th>
              <th className="border border-gray-300 p-1">Mapping CO</th>
              <th className="border border-gray-300 p-1">Write Up (10M)</th>
              <th className="border border-gray-300 p-1">Compile Errors (15M)</th>
              <th className="border border-gray-300 p-1">Execution (15M)</th>
              <th className="border border-gray-300 p-1">Program 2</th>
              <th className="border border-gray-300 p-1">Mapping CO</th>
              <th className="border border-gray-300 p-1">Program & Viva (10M)</th>
              <th className="border border-gray-300 p-1">Total Marks (60M)</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 64 }, (_, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-1 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Name;
