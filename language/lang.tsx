// // context/LanguageContext.tsx
// "use client";
// import { createContext, useState, useContext, useEffect, ReactNode } from "react";
// import { dataAM } from "../data/dataAM";
// import { dataRU } from "../data/dataRU";
// import { dataEN } from "../data/dataEN";

// type DataType = typeof dataAM;

// export default function ClientLanguageLoader({
//   children,
// }: {
//   children: (data: DataType) => ReactNode;
// }) {
//   const [data, setData] = useState<DataType>(dataAM);

//   useEffect(() => {
//     const lang = localStorage.getItem("lang") || "am";
//     switch (lang) {
//       case "ru":
//         setData(dataRU);
//         break;
//       case "en":
//         setData(dataEN);
//         break;
//       default:
//         setData(dataAM);
//     }
//   }, []);

//   return <>{children(data)}</>;
// }
