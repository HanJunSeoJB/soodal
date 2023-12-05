import DataList from "./dataList";
import ReviewTagButtons from "./reviewTagButtons";
import Search from "./search";
import Table from "./table";

export default function highschool(){
  return(
      <div>
          <Search/>
          <Table/>
          <ReviewTagButtons/>
          <DataList/>

      </div>
  )
}