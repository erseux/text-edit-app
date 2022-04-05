import { useRef, useEffect, useState } from "react";

type Props = {
	item: {
		text: any;
		index: number;
		id: any;
	};
	onChange: (event: any) => void;
	newBlock: (arg0: any) => void;
	removeBlock: (arg0: any) => void;
	writeAccess: boolean;
}

export default function TextBlock(props: Props): JSX.Element {
	const [value, setValue] = useState(props.item.text);
	const areaRef = useRef(undefined)
	const parentRef = useRef(undefined)

	useEffect(() => {
		setValue(props.item.text)
		parentRef.current.dataset.replicatedValue = props.item.text
	}, [props.item.text])

	const handleKeyPress = (event: any) => {
		handleHeight(event.target.style.height)
		if (event.key == 'Backspace') {
			setValue(event.target.value)
			props.onChange(event)
		}
		else if (event.key && event.key.length != 1) {
		}
		else {
			setValue(event.target.value)
			props.onChange(event)
		}
	}

	const handleKeyPressItems = (event: any) => {
		handleHeight(event.target.style.height)
		if (event.key === 'Enter') {
			console.log("calling newBlock with index ", props.item.index + 1)
			props.newBlock(props.item.index + 1);
		}
		else if (event.key == 'Backspace') {
			if (event.key == 'Backspace') {
				if (value === "") {
					props.removeBlock(props.item.index);
				} else {
					setValue(event.target.value)
					props.onChange(event, props.item.id);
				}
				setValue(event.target.value)
				props.onChange(event, props.item.id);
			}
			else if (event.key && event.key.length != 1) {
			}
			else {
				setValue(event.target.value)
				props.onChange(event, props.item.id);
			}
		}
	}

	function handleHeight(height: number) {
		if (areaRef.current) {
			// areaRef.current.style.height = `${height}px`;
		}
	}

	useEffect(
		() => {
			if (areaRef?.current) {
				areaRef.current.addEventListener('keyup', handleKeyPress)
			}
		}, []
	)

	useEffect(
		() => {
			if (areaRef.current) {
				// areaRef.current.style.height = `${areaRef.current.style.height}px`;
			}
		}, [value]
	)

	const registerKey = (event: any) => {
		if (props.writeAccess) {
			handleKeyPress(event);
		}
	}

	return (
		<div className="text-block"
			ref={parentRef}
		>

			<textarea autoFocus id="block"
				value={value}
				// rows={1}
				ref={areaRef}
				onInput={e => parentRef.current.dataset.replicatedValue = e.target.value}
				// className="bg-light rounded-3 border-0 overflow-hidden resize-none w-full  p-5 "
				className="font-normal text-slate-600"
				onChange={registerKey}
			/>
		</div>
	)
}