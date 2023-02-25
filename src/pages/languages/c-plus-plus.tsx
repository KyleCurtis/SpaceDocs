import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Link from "next/link";
import CodeBlock from "@/components/Code/CodeBlock";
import Code from "@/components/Code/Code";

import { Output, Comments, Variables  } from "@/code-examples/ts-code";


const CPlusPlus = () => {
	return (
		<div>
			<Layout
				navChildren={
					<div>
						<nav>
							<p className="text-[20px] mb-3">SpaceDocs.info</p>
							<ul className="text-white">
								<Link href="#top-section">
									<li>Top of Page</li>
								</Link>
								<Link href="/">
									<li>Home</li>
								</Link>
							</ul>
							<br/>
							<p className="text-[20px] mb-3">Other</p>
							<ul>
								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>
							</ul>

							<br/>

							<p className="text-[20px] mb-3">Other</p>
							<ul>
								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>
							</ul>

							<br/>

							<p className="text-[20px] mb-3">Other</p>
							<ul>
								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>
							</ul>

							<br/>

							<p className="text-[20px] mb-3">Other</p>
							<ul>
								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>
							</ul>

							<br/>

							<p className="text-[20px] mb-3">Other</p>
							<ul>
								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>

								<Link href="#-section">
									<li>Example</li>
								</Link>
							</ul>

							<br/>
						</nav>
					</div>
				}
			>
				<Header
					main_topic={"C++"}
					topic_summary={
						<div>
							Explore the programming language behind operating systems, desktop applications, game engines, and more!
							<br/> <br/>
							<p className="pt-2">
								{" "}
								<span className="text-[#31cbff] font-bold">Version</span>: ES6+
							</p>
							<p className="pt-2">
								{" "}
								<span className="text-[#31cbff] font-bold">Made with</span>:
								NextJS / TypeScript / TailwindCSS / ChakraUI / ❤️
							</p>
						</div>
					}
				>

				</Header>

				<div className="content-br"></div>

				<h2 className="text-black dark:text-white">Printing Output</h2>
				<CodeBlock codeBlockHeader={"output.js"}>
					<Code lang="javascript">{Output}</Code>
				</CodeBlock>

				<div className="content-br"></div>

				<h2 className="text-black dark:text-white">Comments</h2>
				<CodeBlock codeBlockHeader={"comments.js"}>
					<Code lang="javascript">{Comments}</Code>
				</CodeBlock>

				<div className="content-br"></div>

				<h2 className="text-black dark:text-white">Variables</h2>
				<CodeBlock codeBlockHeader={"variables.js"}>
					<Code lang="javascript">{Variables}</Code>
				</CodeBlock>

				<div className="content-br"></div>

				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
				<div className="content-br"/>
			</Layout>
		</div>
	);
};

export default CPlusPlus;
