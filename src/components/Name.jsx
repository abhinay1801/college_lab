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

        

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-sm font-semibold">Name of Exam:</label>
            <input
              type="text"
              className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Branch & Section:</label>
            <input
              type="text"
              className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Name of Lab:</label>
            <input
              type="text"
              className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Date of Examination:</label>
            <input
              type="date"
              className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Name & College of External Examiner:</label>
            <input
              type="text"
              className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Name of Internal Examiner:</label>
            <input
              type="text"
              className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-4 text-sm">
          <p>Note:</p>
          <ol className="list-decimal ml-6">
            <li>Please enter the marks in the serial order of the Hall Ticket Numbers of the students.</li>
            <li>The award list must be submitted to the Controller of Examinations along with the Statement of Attendance.</li>
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




// import React from "react";

// const Name = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <div className="text-center">
//           <h1 className="text-lg font-bold">CVR COLLEGE OF ENGINEERING</h1>
//           <p className="text-sm">An UGC Autonomous Institution | Affiliated to JNTUH</p>
//           <p className="text-sm">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           <h2 className="text-lg font-bold mt-4">AWARD LIST (LABORATORY)</h2>
//         </div>

//         <div className="mt-4 text-sm">
//           <p>Note:</p>
//           <ol className="list-decimal ml-6">
//             <li>Please enter the marks in the serial order of the Hall Ticket Numbers of the students.</li>
//             <li>The award list must be submitted to the Controller of Examinations along with the Statement of Attendance.</li>
//           </ol>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mt-6">
//           {["Exam", "Branch & Section", "Lab", "Date of Examination", "External Examiner", "Internal Examiner", "Regulation", "Max. Marks"].map((label, index) => (
//             <div key={index}>
//               <label className="text-sm font-semibold">Name of {label}:</label>
//               <input
//                 type={label === "Date of Examination" ? "date" : "text"}
//                 className="w-full border-b border-black p-1 mt-1 text-sm focus:outline-none focus:border-blue-500"
//               />
//             </div>
//           ))}
//         </div>

//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               {/* Table headers */}
//               {["S. No.", "Hall Ticket Number", "Program 1 Executed", "Mapping CO", "Write Up (10M)", "Compile Errors (15M)", "Execution (15M)", "Program 2", "Mapping CO", "Program & Viva (10M)", "Total Marks (60M)"].map((header, index) => (
//                 <th key={index} className="border border-gray-300 p-1">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: 10 }, (_, index) => (
//               <tr key={index}>
//                 {/* Table data rows */}
//                 {Array.from({ length: 11 }, (_, i) => (
//                   <td key={i} className="border border-gray-300 p-1">
//                     {i === 0 ? index + 1 : (
//                       <input
//                         type={i >= 4 && i <= 10 ? "number" : "text"}
//                         className="w-full border-b border-gray-300 p-1 text-sm focus:outline-none focus:border-blue-500"
//                       />
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Name;
