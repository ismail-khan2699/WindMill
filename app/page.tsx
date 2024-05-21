import Image from "next/image";
import Navbar from "./Compoents/1Navbar";
import Whatwedo from "./Compoents/2Whatwedo";
import ProductComponent from "./Compoents/3Component";
import Whoweserve from "./Compoents/4whoweserve";
import Whyhireus from "./Compoents/5Whyhireus";

export default function Home() {
  return (
     <div className=" ">
     <Navbar/>
     <Whatwedo/>
     <ProductComponent/>
     <Whoweserve/>
     <Whyhireus/>
     </div>
  );
}
