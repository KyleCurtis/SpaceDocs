import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Link from "next/link";
import CodeBlock from "@/components/Code/CodeBlock";
import Code from "@/components/Code/Code";

import { Output, Comments, Variables  } from "../../code-examples/js-code";


const JavaScript = () => {
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
							<p className="text-[20px] mb-3">Getting Started</p>
							<ul>
								<Link href="#output-section">
									<li>Printing Output</li>
								</Link>

								<Link href="#comment-section">
									<li>Comments</li>
								</Link>

								<Link href="#variable-section">
									<li>Variables (let/const)</li>
								</Link>
							</ul>

							<br/>

							<p className="text-[20px] mb-3">Working with Data</p>
							<ul>
								<Link href="#type-section">
									<li>data types (Reference Types)</li>
								</Link>

								<Link href="#type-section">
									<li>Getting the type (typeof)</li>
								</Link>

								<Link href="#type-conversion-section">
									<li>Type Conversions</li>
								</Link>
							</ul>

							<br/>

							<p className="text-[20px] mb-3">Objects</p>
							<ul>
								<Link href="#type-section">
									<li>data types (Reference Types)</li>
								</Link>

								<Link href="#type-section">
									<li>Getting the type (typeof)</li>
								</Link>

								<Link href="#type-conversion-section">
									<li>Type Conversions</li>
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
					main_topic={"JavaScript"}
					topic_summary={
						<div>
							Explore the programming language behind interactive websites,
							desktop application, mobile apps, video games, and more!
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
					<br/>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleCurtis/SpaceDocs">
					<button className="underline decoration-dotted">💻 Github</button>
					</a>
					<span className="px-3"/>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleCurtis/SpaceDocs/issues">
					<button className="underline decoration-dotted">
						⚠️ Report an issue
					</button>
					</a>
					<span className="px-3"/>
					<a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=RHCR2JJ6ZZDPS">
						<button className="underline decoration-dotted">
							☕ Buy me a coffee
						</button>
					</a>
					<br/>
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

export default JavaScript;
