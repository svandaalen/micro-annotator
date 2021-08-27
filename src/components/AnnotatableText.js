import { useState, useEffect, useRef } from 'react'

import TextLine from './TextLine'

const AnnotatableText = ({ text, onReadSelection }) => {	
	const ref = useRef();
	const [range, setRange] = useState(null);
	
	useEffect(() => {
    	function handleChange() {
      		// get selection information from the browser
      		const selection = window.getSelection();

      		// we only want to proceed when we have a valid selection
      		if (
        		!selection ||
        		selection.isCollapsed ||
        		!selection.containsNode(ref.current, true)
      		) {
        		setRange(null);
        		return;
      		}

      		onReadSelection();
    	}

    	document.addEventListener("selectionchange", handleChange);
    	return () => document.removeEventListener("selectionchange", handleChange);
  	}, []);

	return (
		<div ref={ref} style={{ 'padding': '5px', 'lineHeight': '76%' }}>
			{text.map((line, index) => (
				<TextLine key={index} id={index} text={line} width/>
			))}
		</div>
	)
}

export default AnnotatableText