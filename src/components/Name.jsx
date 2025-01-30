// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Name = () => {
//   const [section, setSection] = useState("");
//   const [rollNumbers, setRollNumbers] = useState([]);
//   const [setNumbers, setSetNumbers] = useState({});
//   const [setQuestions, setSetQuestions] = useState({});
//   const [marks, setMarks] = useState({}); // To track marks

//   // Fetch roll numbers based on section
//   const fetchRollNumbers = async () => {
//     if (section) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/students/${section}`);
//         setRollNumbers(response.data);
//       } catch (error) {
//         console.error("Error fetching roll numbers:", error.response ? error.response.data : error.message);
//       }
//     }
//   };

//   // Fetch set questions based on set number
//   const fetchSetQuestions = async (rollNumber, setNumber) => {
//     if (setNumber) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/sets/${setNumber}`);
//         setSetQuestions((prev) => ({ ...prev, [rollNumber]: response.data }));
//       } catch (error) {
//         console.error("Error fetching set questions:", error);
//       }
//     }
//   };

//   const handleMarksChange = (rollNumber, field, value) => {
//     setMarks((prev) => ({
//       ...prev,
//       [rollNumber]: {
//         ...prev[rollNumber],
//         [field]: value,
//       },
//     }));
//   };

//   const calculateTotalMarks = (rollNumber) => {
//     const studentMarks = marks[rollNumber] || {};
//     const writeUp = parseInt(studentMarks.writeUp || 0, 10);
//     const compileErrors = parseInt(studentMarks.compileErrors || 0, 10);
//     const execution = parseInt(studentMarks.execution || 0, 10);
//     const programSyntax = parseInt(studentMarks.programSyntax || 0, 10);
//     const vivaVoice = parseInt(studentMarks.vivaVoice || 0, 10);

//     // Return the sum of all marks
//     return writeUp + compileErrors + execution + programSyntax + vivaVoice;
//   };

//   useEffect(() => {
//     fetchRollNumbers();
//   }, [section]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
//         <div className="flex justify-center items-center border w-full h-23">
//           <div className="text-center border-r w-[820px] h-full">
//             <h1 className="text-2xl font-bold font-serif ">CVR COLLEGE OF ENGINEERING</h1>
//             <p className="text-lg font-semibold font-serif">An UGC Autonomous Institution Affiliated to JNTUH</p>
//             <p className="text-sm font-semibold font-serif">Vastunagar, Mangalpally (V), Ibrahimpatnam (M), Ranga Reddy District - 501510</p>
//           </div>
//           <div className="flex flex-col justify-center items-center w-[180px] h-full">
//             <h1 className="text-center text-xl font-bold font-serif ">College Code</h1>
//             <h1 className="text-2xl font-bold font-serif ">B8</h1>
//           </div>
//         </div>

//         {/* Other form inputs */}
//         <div className="flex flex-col gap-2 mt-4">
//           <h2 className="text-lg font-bold mt-2 mb-3 text-center underline ">AWARD LIST (LABORATORY)</h2>
//           <div className="flex gap-3 w-full">
//             <div className="w-[60%]">
//               <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
//               <input
//                 type="text"
//                 className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="flex w-[40%]  ">
//               <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               />
//               <label className=" inline text-sm font-semibold ">20</label>
//               <input
//                 type="text"
//                 className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className="mt-3 w-full">
//             <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
//               value={section}
//               onChange={(e) => setSection(e.target.value)}
//             />
//             <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex mt-3  w-full">
//             <div className="w-[50%]">
//               <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[30%]">
//               <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//             <div className="w-[20%]">
//               <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
//               <input
//                 type="text"
//                 className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
//               />
//             </div>
//           </div>
//           <div className=" w-full flex mt-3 ">
//             <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//           <div className="flex w-full mt-3">
//             <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
//             <input
//               type="text"
//               className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
//             />
//           </div>
//         </div>

//         <table className="w-full text-sm border-collapse border border-gray-300 mt-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-1 w-12">S. No.</th>
//               <th className="border border-gray-300 p-1 w-20">Set. No.</th>
//               <th className="border border-gray-300 p-1 w-40">Hall Ticket Number of Student</th>
//               <th className="border border-gray-300 p-1 w-42">Program 1 Executed</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-24">Write Up (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Compile Errors (15M)</th>
//               <th className="border border-gray-300 p-1 w-24">Execution (15M)</th>
//               <th className="border border-gray-300 p-1 w-42">Program 2</th>
//               <th className="border border-gray-300 p-1 w-10">Mapping CO</th>
//               <th className="border border-gray-300 p-1 w-14">Program & Syntax (10M)</th>
//               <th className="border border-gray-300 p-1 w-10">Viva-Voice (10M)</th>
//               <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rollNumbers.map((rollNumber, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     value={setNumbers[rollNumber] || ""}
//                     onChange={(e) => {
//                       const setNo = e.target.value;
//                       setSetNumbers((prev) => ({ ...prev, [rollNumber]: setNo }));
//                       fetchSetQuestions(rollNumber, setNo);
//                     }}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.question || "N/A"}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.coNumber || "N/A"}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.question || "N/A"}</td>
//                 <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.coNumber || "N/A"}</td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1">
//                   <input
//                     type="number"
//                     className="w-full border-none outline-none text-sm"
//                     onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-1 text-center">
//                   {calculateTotalMarks(rollNumber)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 items-center ml-110">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };













































import React, { useState, useEffect } from "react";
// import React, { useState, useEffect, useRef } from "react"; // useRef is here
import axios from "axios";
import html2pdf from 'html2pdf.js';

const Name = () => {
  const [section, setSection] = useState("");
  const [rollNumbers, setRollNumbers] = useState([]);
  const [setNumbers, setSetNumbers] = useState({});
  const [setQuestions, setSetQuestions] = useState({});
  const [marks, setMarks] = useState({});
  const [pdfUrl, setPdfUrl] = useState("");

  // Fetch roll numbers based on section
  const fetchRollNumbers = async () => {
    if (section) {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${section}`);
        setRollNumbers(response.data);
      } catch (error) {
        console.error("Error fetching roll numbers:", error.response ? error.response.data : error.message);
      }
    }
  };

  // Fetch set questions based on set number
  const fetchSetQuestions = async (setNumber) => {
    if (setNumber) {
      try {
        const response = await axios.get(`http://localhost:5000/api/sets/${setNumber}`);
        return response.data; // return the fetched questions
      } catch (error) {
        console.error("Error fetching set questions:", error);
        return []; // return empty array if error occurs
      }
    }
    return []; // return empty array if no setNumber
  };

  // Handle marks change
  const handleMarksChange = (rollNumber, field, value) => {
    setMarks((prev) => ({
      ...prev,
      [rollNumber]: {
        ...prev[rollNumber],
        [field]: value,
      },
    }));
  };

  // Reset all data to initial state
  const resetData = () => {
    setMarks({});
    setSetNumbers({});
    setSetQuestions({});
  };

  // Calculate total marks for each student
  const calculateTotalMarks = (rollNumber) => {
    const studentMarks = marks[rollNumber] || {};
    const writeUp = parseInt(studentMarks.writeUp || 0, 10);
    const compileErrors = parseInt(studentMarks.compileErrors || 0, 15);
    const execution = parseInt(studentMarks.execution || 0, 15);
    const programSyntax = parseInt(studentMarks.programSyntax || 0, 10);
    const vivaVoice = parseInt(studentMarks.vivaVoice || 0, 10);

    return writeUp + compileErrors + execution + programSyntax + vivaVoice;
  };

  // Reset values when section changes
  useEffect(() => {
    resetData();  // Reset all fields when section changes
    fetchRollNumbers(); // Fetch roll numbers based on section
  }, [section]);

  // Fetch questions when set number changes for any student
  useEffect(() => {
    // Loop over roll numbers to fetch questions when set number is updated
    Object.keys(setNumbers).forEach((rollNumber) => {
      const setNumber = setNumbers[rollNumber];
      if (setNumber) {
        fetchSetQuestions(setNumber).then((questions) => {
          setSetQuestions((prev) => ({
            ...prev,
            [rollNumber]: questions,
          }));
        });
      }
    });
  }, [setNumbers]);
 


  const handlePrint = () => {
    window.print();
  };

//   const printableAreaRef = useRef(null);
//   const [dataLoaded, setDataLoaded] = useState(false); 

//   const handlePrint = () => {
//     if (!dataLoaded) {
//         alert("Data is still loading. Please wait.");
//         return;
//     }

//     const element = printableAreaRef.current;
//     if (element) {
//         const opt = {
//             margin: 10,
//             filename: 'downloaded_document.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//         };
//         html2pdf().from(element).set(opt).save();
//     } else {
//         console.error("Element not found!");
//     }
// };

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
          <div className="flex gap-3 w-full">
            <div className="w-[60%]">
              <label className=" inline text-sm font-semibold font-serif ">Name of Exam:</label>
              <input
                type="text"
                className="text-sm w-[80%] border-b focus:outline-none border-black inline-block"
              />
            </div>
            <div className="flex w-[40%]  ">
              <label className=" inline text-sm font-semibold font-serif ">(Reg./Supp)Month:</label>
              <input
                type="text"
                className="  pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
              />
              <label className=" inline text-sm font-semibold ">20</label>
              <input
                type="text"
                className="  pl-2 text-sm w-[10%] border-b focus:outline-none border-black inline-block"
              />
            </div>
          </div>
          <div className="mt-3 w-full">
            <label className=" inline text-sm font-semibold font-serif ">Branch & Section:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[60%] border-b focus:outline-none border-black inline-block"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
            <label className=" pl-2 inline text-sm font-semibold font-serif  ">Regulation:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[17.2%] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div className="flex mt-3  w-full">
            <div className="w-[50%]">
              <label className="text-sm font-semibold font-serif ">Name of Lab:</label>
              <input
                type="text"
                className="pl-2 text-sm w-[80%] border-b focus:outline-none border-black inline-block"
              />
            </div>
            <div className="w-[30%]">
              <label className="text-sm font-semibold font-serif ">Date of Examination:</label>
              <input
                type="text"
                className="pl-2 text-sm w-[47%] border-b focus:outline-none border-black inline-block"
              />
            </div>
            <div className="w-[20%]">
              <label className="text-sm font-semibold font-serif ">Max.Marks:</label>
              <input
                type="text"
                className="pl-2 text-sm w-[55%] border-b focus:outline-none border-black inline-block"
              />
            </div>
          </div>
          <div className=" w-full flex mt-3 ">
            <label className="text-sm font-semibold font-serif ">Name & College of External Examiner:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[71.5%] border-b focus:outline-none border-black inline-block"
            />
          </div>
          <div className="flex w-full mt-3">
            <label className="text-sm font-semibold font-serif ">Name of Internal Examiner:</label>
            <input
              type="text"
              className="pl-2 text-sm w-[79%] border-b focus:outline-none border-black inline-block"
            />
          </div>
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
              <th className="border border-gray-300 p-1 w-10">Viva-Voice (10M)</th>
              <th className="border border-gray-300 p-1 w-24">Total Marks (60M)</th>
            </tr>
          </thead>
          <tbody>
            {rollNumbers.map((rollNumber, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-1 text-center">{index + 1}</td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    value={setNumbers[rollNumber] || ""}
                    onChange={(e) => {
                      const setNo = e.target.value;
                      setSetNumbers((prev) => ({ ...prev, [rollNumber]: setNo }));
                    }}
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">{rollNumber}</td>
                <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.question || "N/A"}</td>
                <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[0]?.coNumber || "N/A"}</td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    onChange={(e) => handleMarksChange(rollNumber, "writeUp", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    onChange={(e) => handleMarksChange(rollNumber, "compileErrors", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    onChange={(e) => handleMarksChange(rollNumber, "execution", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.question || "N/A"}</td>
                <td className="border border-gray-300 p-1 text-center">{setQuestions[rollNumber]?.[1]?.coNumber || "N/A"}</td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    onChange={(e) => handleMarksChange(rollNumber, "programSyntax", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="number"
                    className="w-full border-none outline-none text-sm"
                    onChange={(e) => handleMarksChange(rollNumber, "vivaVoice", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-1 text-center">
                  {calculateTotalMarks(rollNumber)} {/* Show calculated total marks */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        <button 
          onClick={handlePrint} 
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 items-center ml-110"
        >
          Print
        </button>

{/* 
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md border" ref={printableAreaRef}>

                <button
                    onClick={handlePrint}
                    disabled={!dataLoaded}  // Disable while loading
                    className={`mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 items-center ml-110 ${!dataLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {dataLoaded ? "Download PDF" : "Loading..."}
                </button>

                {!dataLoaded && ( // Show loading indicator
                    <div className="text-center mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                        <p className="mt-2">Loading data...</p>
                    </div>
                )}
            </div>
        </div>
      */}

     
      </div>
    </div>
  );
};

export default Name;
