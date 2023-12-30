function CommonPage({title}){
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

function FreePage(){
  return(
    <CommonPage title="Free"/>
  )
}

function InfoPage(){
  return(
    <CommonPage title="Info"/>
  )
}

function QnAPage(){
  return(
    <CommonPage title="QnA"/>
  )
}

export {FreePage, InfoPage, QnAPage}