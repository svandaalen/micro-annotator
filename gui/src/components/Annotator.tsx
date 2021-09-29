import AddAnnotation from './AddAnnotation'
import AnnotationList from './AnnotationList'
import AnnotationContent from './AnnotationContent'
import {Annotation} from "../model/Annotation";
import {AnnRange} from "../model/AnnRange";

type AnnotatorProps = {
  currentCreator: string;
  selectionRange: AnnRange | undefined;
  onAddAnnotation: (ann: Annotation) => void;
  onSelectAnnotation: (ann: number) => void,
  myAnnotations: Annotation[]
}

export default function Annotator(props: AnnotatorProps) {
  return (
    <div style={{'minWidth': '150px', 'maxWidth': '280px'}}>
      <h4>Annotator</h4>
      {props.selectionRange
        ? <AddAnnotation
          currentCreator={props.currentCreator}
          selectedRange={props.selectionRange}
          onAdd={props.onAddAnnotation}
        />
        : <small>To create an annotation, select some text...</small>
      }
      {props.myAnnotations.length
        ? <>
          <h4>Existing user annotations</h4>

          <AnnotationList myAnnotations={props.myAnnotations} onSelectAnnotation={props.onSelectAnnotation}/>
          <AnnotationContent ann={props.myAnnotations.find(a => a.selected)}/>
        </>
        : null
      }

    </div>
  )
}
