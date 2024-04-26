import TablePoint from "./table";
import FooterComp from "../Home/Footer";

export default function PointKamu() {
  return (
    <>
      <div className="mt-5 md:pr-[8.5rem] md:pl-[8.5rem] pr-[0.71rem] pl-[0.71rem]">
        {/* <p className="text-center text-[1.1rem] md:text-start font-poopin underline-offset-[6px] underline decoration-[3px] decoration-red-500">
          Point Kamu
        </p> */}
        <>
          <Login />
        </>
        <div className="table-login pr-[0.71rem] pl-[0.71rem] mt-5 flex justify-center ">
          <div className="pt-5 pb-5 w-full border rounded-lg border-black text-center h-[9rem] pr-[0.71rem] pl-[0.71rem] grid grid-cols-3">
            <div className="   text-secondary-2  grid grid-rows-3">
              <p className="text-[0.71rem]  font-medium">Jumlah Pembelian</p>
              <p className="text-accents-2 font-medium text-[1.71rem]">24</p>
              <p className="text-accents-2 font-medium  text-[0.71rem]">Kali</p>
            </div>
            <div className=" font-medium text-secondary-2 text-[0.71rem] grid grid-rows-3">
              <p className="text-[0.71rem]  font-medium">Bukti Transaksi</p>
              <p className="text-accents-2 font-medium text-[1.71rem]">18</p>
              <p className="text-accents-2 font-medium  text-[0.71rem]">
                Upload Bukti
              </p>
            </div>
            <div className=" font-medium text-secondary-2 text-[0.71rem] grid grid-rows-3">
              <p className="text-[0.71rem]  font-medium">Total Point</p>
              <p className="text-accents-2 font-medium text-[1.71rem]">360</p>
              <p className="text-accents-2 font-medium  text-[0.71rem]">
                Points
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-secondary-2 text-[0.85rem] mt-[3rem] font-medium font-poopin">
          Ladder Board Points
        </p>
        <div className="mt-[3rem]">
          <TableBaru />
          {/* <TablePoint /> */}
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
            Silahkan masuk/daftar untuk melihat point
          </p>
          <div className="flex justify-center mt-4">
            <button className="mx-2 px-5 py-2 border border-red-600 text-red-600 font-medium rounded-sm">
              Daftar
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
    <div className="flex flex-col text-base font-medium text-yellow-900 rounded-xl border-4 border-yellow-900 border-solid">
    <div className="flex gap-5 justify-between px-7 py-6 w-full text-black whitespace-nowrap bg-yellow-400 rounded-xl border-4 border-yellow-900 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>No.</div>
      <div>Nama</div>
      <div>Email</div>
      <div>Points</div>
    </div>
    <div className="flex gap-5 justify-between px-8 py-6 w-full whitespace-nowrap max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>01</div>
      <div>Nurahman</div>
      <div>Nurahman2@gmail.com</div>
      <div className="text-red-600">1,204</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>02</div>
      <div>Akbarudin Abdul</div>
      <div>Akbarudin.a@gmail.com</div>
      <div className="text-red-600">1,178</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>03</div>
      <div>Steven Tjandra</div>
      <div>S.Tjandra99@gmail.com</div>
      <div className="text-red-600">1,123</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>04</div>
      <div>Aqilah N</div>
      <div>Aqilah08n@gmail.com</div>
      <div className="text-red-600">1,111</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>05</div>
      <div>Rahmawati S</div>
      <div>Rahma.watis@gmail.com</div>
      <div className="text-red-600">1,095</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>06</div>
      <div>Michael J.S</div>
      <div>MichJes@gmail.com</div>
      <div className="text-red-600">1,044</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>07</div>
      <div>Katrin K</div>
      <div>Katrin.Kaka6@gmail.com</div>
      <div className="text-red-600">1,008</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>08</div>
      <div>Syaifudin M</div>
      <div>Sya.Muh@gmail.com</div>
      <div className="text-red-600">992</div>
    </div>
    <div className="flex gap-5 justify-between px-7 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>09</div>
      <div>Yuliana H</div>
      <div>YHartanto00@gmail.com</div>
      <div className="text-red-600">977</div>
    </div>
    <div className="flex gap-5 justify-between px-8 py-6 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>10</div>
      <div>Tina Amanda</div>
      <div>Tina.tin04@gmail.com</div>
      <div className="text-red-600">923</div>
    </div>
  </div>
  );
}
