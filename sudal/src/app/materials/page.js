import DataList from "./dataList";
import ReviewTagButtons from "./reviewTagButtons";
import Search from "./search";
import Table from "./table";

export default function MaterialsPage(){
  return(
      <div className="">
          <Search/>
          <Table/>
          <ReviewTagButtons/>
          <DataList/>
      </div>
  )
}