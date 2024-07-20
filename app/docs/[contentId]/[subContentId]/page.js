import ContentDisplay from "@/components/ContentDisplay";



export default function subContentpage({ params : {subContentId}}) {
    return (
      <ContentDisplay id={subContentId}/>
    )
  }
