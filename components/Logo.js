import Image from "next/image";

export default function Logo(props) {
	return (
		<a
			href={props.link}
			className='relative w-12 h-12 mx-2'
			target='_blank'
			rel='noopener'
		>
			<Image src={props.icon} layout='fill' alt={`Link to ${props.name}`} />
		</a>
	);
}
