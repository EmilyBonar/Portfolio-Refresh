import Head from "next/head";

export function Header(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<meta property="og:title" content={props.title} key="title" />
			<meta property="og:image" content="/background.jpg"></meta>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			></link>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			></link>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			></link>
			<link rel="manifest" href="/site.webmanifest"></link>
			<meta name="theme-color" content="#98d9d8"/>
		</Head>
	);
}

export default Header;
