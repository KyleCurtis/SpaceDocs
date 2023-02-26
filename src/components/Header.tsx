const Header = ({main_topic, topic_summary, hero_image}: any) => {
	return (
		<div>
			<header className="text-center md:text-left bg-transparent text-black dark:text-white">
				<div className="relative">
					<div className="absolute right-0">

					</div>
				</div>
					<div className="w-[100%] border-[var(--dark-border)]">
						<h1 className="main-topic pb-4 font-bold text-black dark:text-white text-[40px]">
							{main_topic}
						</h1>
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleCurtis/SpaceDocs">
							<button>💻 Github</button>
						</a>
						<span className="px-3"/>
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/KyleCurtis/SpaceDocs/issues">
							<button>
								⚠️ Report an issue
							</button>
						</a>
						<span className="px-3"/>
						<a target="_blank" rel="noopener noreferrer"
							 href="https://www.paypal.com/donate/?hosted_button_id=RHCR2JJ6ZZDPS">
							<button>
								☕ Buy me a coffee?
							</button>
						</a>
						<br/><br/>
						<div className="p-6 border-2 border-[var(--dark-border)] rounded-lg p-4">{topic_summary}</div>
						<br/>

					</div>

			</header>
		</div>

	);
};

export default Header;
