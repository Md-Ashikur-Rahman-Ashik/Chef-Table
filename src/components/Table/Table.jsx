// import { useEffect, useState } from "react";
// import Tbody from "../Tbody/Tbody";

// const Table = () => {

//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetch("recipes.json")
//       .then((res) => res.json())
//       .then((data) => setRecipes(data));
//   }, []);


//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         {/* head */}
//         <thead>
//           <tr>
//             <th></th>
//             <th>Name</th>
//             <th>Time</th>
//             <th>Calories</th>
//           </tr>
//         </thead>
//         {/* <tbody id="buttonCook" className="hidden"> */}
//         <tbody id="buttonCook" className="hidden">
//           {/* row 1 */}
//           {
//             recipes.map(old => <Tbody key={old["calories"]} old={old}></Tbody>)
//           }
//           {/* row 2 */}
//           {/* <tr className="hover">
//             <th>2</th>
//             <td>Hart Hagerty</td>
//             <td>Desktop Support Technician</td>
//             <td>Purple</td>
//           </tr> */}
//           {/* row 3 */}
//           {/* <tr>
//             <th>3</th>
//             <td>Brice Swyre</td>
//             <td>Tax Accountant</td>
//             <td>Red</td>
//           </tr> */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
