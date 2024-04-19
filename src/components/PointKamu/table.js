import React from "react";

const data = [
  { no: "01", name: "Nurahman", email: "Nurahman2@gmail.com", pts: "1,204" },
  {
    no: "02",
    name: "Akbarudin A",
    email: "Akbarudin.a@gmail.com",
    pts: "1,178",
  },
  { no: "03", name: "Steven T", email: "S.Tjandra99@gmail.com", pts: "1,123" },
  { no: "04", name: "Aqilah N", email: "Aqilah08n@gmail.com", pts: "1,111" },
  {
    no: "05",
    name: "Rahmawati S",
    email: "Rahma.watis@gmail.com",
    pts: "1,095",
  },
  { no: "06", name: "Michael J.S", email: "Mich.Jes@gmail.com", pts: "1,044" },
  { no: "07", name: "Katrin K", email: "Katrin.Kak6@gmail.com", pts: "1,008" },
  { no: "08", name: "Syafiudin M", email: "Sya.Muh@gmail.com", pts: "992" },
  { no: "09", name: "Yuliana H", email: "YHartanto00@gmail.com", pts: "977" },
  { no: "10", name: "Tina A", email: "Tina.tin04@gmail.com", pts: "923" },
];
const styles = {
  table: {
    width: "100%",
    // borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  th: {
    backgroundColor: "#FFD700",
    color: "#000",
    fontWeight: "bold",
    padding: "10px",
    // borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  thFirst: {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  thLast: {
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  tdFirst: {
    textAlign: "center",
    fontWeight: "bold",
  },
  tr: {
    backgroundColor: "#FFFFFF",
  },
  trStripe: {
    backgroundColor: "#F8F8F8",
  },
};

export default function TablePoint() {
  return (
    <div className="border rounded-md border-black">
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.thFirst }}>No.</th>
            <th style={styles.th}>Nama</th>
            <th style={styles.th}>Email</th>
            <th style={{ ...styles.th, ...styles.thLast }}>Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.no}
              style={index % 2 === 0 ? styles.tr : styles.trStripe}
            >
              <td style={{ ...styles.td, ...styles.tdFirst }}>{item.no}</td>
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>{item.email}</td>
              <td style={styles.td}>{item.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
