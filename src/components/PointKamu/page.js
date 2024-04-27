import TablePoint from "./table";
import FooterComp from "../Home/Footer";

export default function PointKamu() {
  return (
    <>
      <div className="mt-5 md:pr-[8.5rem] md:pl-[8.5rem] pr-[0.71rem] pl-[0.71rem]">
        <Login />
        <p className="text-center text-secondary-2 text-[0.85rem] mt-[3rem] font-medium font-poopin">
          Ladder Board Points
        </p>
        <div className="mt-[3rem]">
          <TableBaru />
        </div>
      </div>
      <div className="mt-[10rem]">
        <FooterComp />
      </div>
    </>
  );
}

function Login() {
  return (
    <div className="table-login pr-[0.71rem] pl-[0.71rem] mt-5 flex justify-center ">
      <div className="pt-5 pb-5 w-full border rounded-lg border-black text-center h-[9rem]">
        <div className="text-secondary-2">
          <p className="text-[1rem] font-medium">
            Please log in/register to view points
          </p>
          <div className="flex justify-center mt-4">
            <button className="mx-2 px-5 py-2 border border-red-600 text-red-600 font-medium rounded-sm">
              Register
            </button>
            <button className="mx-2 px-5 py-2 bg-red-600 text-white font-medium rounded-sm">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableBaru() {
  return (
    <>
      <style>
        {`
        .styled-table {
            font-family: Arial, sans-serif;
            background-color: white;
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            border-radius: 8px;
            border: 1px solid black;
        }
        .styled-table thead tr {
            background-color: #FDDB1D;
            color: black;
            text-align: left;
            border-bottom: 1px solid black;
        }
        .styled-table th,
        .styled-table td {
            padding: 12px 15px;
        }
        .styled-table tbody tr {
            border-bottom: 1px solid #dddddd;
        }
        .styled-table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
        }
        .styled-table tbody tr:last-of-type {
            border-bottom: 2px solid #009879;
        }
        .styled-table tbody tr.active-row {
            font-weight: bold;
            color: #009879;
        }
        `}
      </style>
      <table className="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Jensen</td>
            <td>Jensen@gmail.com</td>
            <td className="text-red-600">1,204</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Akbarudin Abdul</td>
            <td>Akbarudin.a@gmail.com</td>
            <td className="text-red-600">1,178</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Steven Tjandra</td>
            <td>S.Tjandra99@gmail.com</td>
            <td className="text-red-600">1,123</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Steven </td>
            <td>tarjo@gmail.com</td>
            <td className="text-red-600">1,123</td>
          </tr>
          <tr>
            <td>05</td>
            <td>olivia </td>
            <td>olivia@gmail.com</td>
            <td className="text-red-600">1,123</td>
          </tr>
          {/* more rows as needed */}
        </tbody>
      </table>
      <div className="Frame51 t h-10 justify-end w-full items-start gap-2 inline-flex">
        <div className="Frame46 hover:cursor-pointer w-10 p-2 bg-yellow-900 rounded flex-col justify-center items-center gap-2 inline-flex">
          <div className=" text-white text-base font-medium font-['Poppins']">
            1
          </div>
        </div>
        <div className="Frame47 hover:cursor-pointer hover:bg-primary-2 w-10 p-2 rounded border border-yellow-900 flex-col justify-center items-center gap-2 inline-flex">
          <div className=" text-yellow-900 text-base font-medium font-['Poppins']">
            2
          </div>
        </div>
        <div className="Frame48 hover:cursor-pointer hover:bg-primary-2 w-10 p-2 rounded border border-yellow-900 flex-col justify-center items-center gap-2 inline-flex">
          <div className=" text-yellow-900 text-base font-medium font-['Poppins']">
            3
          </div>
        </div>
        <div className="Frame49 hover:cursor-pointer hover:bg-primary-2 w-10 p-2 rounded border border-yellow-900 flex-col justify-center items-center gap-2 inline-flex">
          <div className=" text-yellow-900 text-base font-medium font-['Poppins']">
            4
          </div>
        </div>
       
      </div>
    </>
  );
}
