import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc"
import { getDocumentByAuthor } from "@/utils/doc-util";


export default function AuthorPage({params:{name}}) {
  const docs = getDocuments();
  const matchDocs = getDocumentByAuthor(docs,name)
  return (
   <ContentDisplay id={matchDocs[0].id} />
  )
}
