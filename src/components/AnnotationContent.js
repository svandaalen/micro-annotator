const AnnotationContent = ( { myAnnotations } ) => {	
	return (
		<div style={{ 'padding': '20px', 'fontSize': '11px', 'border-style': 'solid', 'border-color': 'black', 'border-width': '1px'}}>			
				{myAnnotations.map((annot, index) => annot.selected === true ? 
					<ul>
						<li>text: {annot.entity_text}</li>
						<li>resource: {annot.resource_id}</li>
						<li>id: {annot.id}</li>
						<li>annotation type: {annot.label}</li>
						<li>entity type: {annot.entity_type}</li>
						<li>begin anchor: {annot.begin_anchor}</li>
						<li>begin offset: {annot.begin_char_offset}</li>
						<li>end anchor: {annot.end_anchor}</li>
						<li>end offset: {annot.end_char_offset}</li>
					</ul> : 
					null )}
		</div>
	)
}

export default AnnotationContent