import React, {StatelessComponent} from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  NOTE_TYPE_MAP,
  BaseNote,
} from "../../components/notes/note-types/module"
import {Link} from "gatsby"
import Bio from '../../components/bio';

const Template: StatelessComponent<{
  location: any,
  modal?: boolean,
  pageContext: {note: BaseNote<any>}
}> = ({location, modal, pageContext: {note}}) => {
  const Detailed = NOTE_TYPE_MAP[note.type].detail
  const Note = props => <Detailed {...props} {...note} />

  const PreloadedLayout = (
    <Layout location={location}>
      <SEO
        title={"Notes: " + note.title}
        keywords={[
          `notes`,
          `javascript`,
          `typescript`,
          `programming`,
          "bennetthardwick",
        ]}
      />

      <header>
        <h1>{note.title}</h1>
        <p>
          This is a note titled "{note.name}" taken from my note Library.{" "}
          <Link to={"/notes/"}>Return to Library.</Link>
        </p>
      </header>
      <Note modal={false} />
      <Bio isAmp={false} />
    </Layout>
  )

  const ModalLayout = <Note modal={true} />

  return modal ? ModalLayout : PreloadedLayout
}

export default Template
