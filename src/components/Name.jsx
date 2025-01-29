import React from "react";

const Name = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
      <div className="flex justify-center items-center border w-full h-23">
       <div className="text-center border-r w-[820px] h-full">
        <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
        <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
        <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[180px] h-full">
        <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
        <h1 className="text-2xl font-bold font-serif ">B8</h1>
      </div>
      </div>

        

        <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
          <div className="flex gap-5 w-full">
            <div>
            <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
            <input
              type="text"
              className="text-sm w-[440px] border-b focus:outline-none border-black inline-block"
            />
            </div>
            <div className="flex ">
            <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
            <input
              type="text"
              className="  pl-2 text-sm w-[180px] border-b focus:outline-none border-black inline-block"
            />
            <label className=" inline text-sm font-semibold ">20</label>
            <input
              type="text"
              className="  pl-2 text-sm w-[50px] border-b focus:outline-none border-black inline-block"
            />
            </div>
          </div>
          <div className="mt-3">
            <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[650px] border-b focus:outline-none border-black inline-block"
            />
            <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[80px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div className="flex mt-3 gap-2">
          <div>
            <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[380px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div>
            <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[150px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div>
            <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[60px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          </div>
          <div className=" gap-1 flex mt-3 ">
            <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[670px] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div className="flex gap-1 mt-3">
            <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[740px] border-b focus:outline-none border-black inline-block"
            />
          </div>
        </div>
        <div className="mt-4 text-sm flex">
          <p className="font-bold font-serif ">Note:</p>
          <ol className="ml-6">
            <li className="font-serif ">1) Please enter the marks in the serial order of the Hall Ticket Numbers of the students.</li>
            <li className="font-serif ">2) The award list must be submitted to the Controller of Examinations along with the Statement of Attendance.</li>
          </ol>
        </div>
        <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
        <thead>
            <tr className="bg-gray-200">
            <th className="border border-gray-300 p-1 w-12">S. No.</th>
            <th className="border border-gray-300 p-1 w-20">Set. No.</th>
            <th className="border border-gray-300 p-1 w-40">Hall Ticket Number of Student</th>
            <th className="border border-gray-300 p-1 w-42">Program 1 Executed</th>
            <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
            <th className="border border-gray-300 p-1 w-24">Write Up (10M)</th>
            <th className="border border-gray-300 p-1 w-24">Compile Errors (15M)</th>
            <th className="border border-gray-300 p-1 w-24">Execution (15M)</th>
            <th className="border border-gray-300 p-1 w-42">Program 2</th>
            <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
            <th className="border border-gray-300 p-1 w-14">Program & Syntax (10M)</th>
            <th className="border border-gray-300 p-1 w-10">Viva-Voice  (10M)</th>
            <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
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

        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 items-center ml-110">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Name;
