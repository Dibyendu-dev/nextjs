import ContentDisplay from "@/components/ContentDisplay"
import { getDocuments } from "@/lib/doc"
import { getDocumentByTag } from "@/utils/doc-util"

export default function TagPage({params:{name}}) {

  const docs =getDocuments();
  const matchDocuments = getDocumentByTag(docs,name); 

    return (
     <ContentDisplay id={matchDocuments[0].id} />
    )
  }