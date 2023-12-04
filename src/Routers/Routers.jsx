import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../HomePage/Home/Home";
import JournalsSubjects from "../JournalsPage/JournalsSubjects/JournalsSubjects";
import Accounting from "../Journals/AccountingPage/Accounting/Accounting";
import Agriculture from "../Journals/AgriculturePage/Agriculture/Agriculture";
import Archaeology from "../Journals/ArchaeologyPage/Archaeology/Archaeology";
import Art from "../Journals/ArtPage/Art/Art";
import Bank from "../Journals/BankPage/Bank/Bank";
import Biochemistry from "../Journals/BiochemistryPage/Biochemistry/Biochemistry";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/journalsubjects",
            element:<JournalsSubjects></JournalsSubjects>
        },
        {
            path:"/accounting",
            element:<Accounting></Accounting>
        },
        {
            path:"/agriculture",
            element:<Agriculture></Agriculture>
        },
        {
            path:"/archaeology",
            element:<Archaeology></Archaeology>
        },
        {
            path:"/art",
            element:<Art></Art>
        },
        {
            path:"/bank",
            element:<Bank></Bank>
        },
        {
            path:"/biochemistry",
            element:<Biochemistry></Biochemistry>
        }
      ]
    },
  ]);
