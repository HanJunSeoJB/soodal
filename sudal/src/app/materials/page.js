import DataList from "./dataList";
import ReviewTagButtons from "./reviewTagButtons";
import Search from "./search";
import Table from "./table";

export default function MaterialsPage(){
  return(
      <div className='ml-[35.5px] w-[1000px]'>
          <Search/>
          <Table/>
          <ReviewTagButtons/>
          <DataList/>
      </div>
  )
}