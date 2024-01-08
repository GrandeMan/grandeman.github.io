const InfiniteScroll = () => {
	return (
		<div
			x-data="{}"
			x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
			className="w-full flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
		>
			<ul
				x-ref="logos"
				className=" [&_li]:mx-8 [&_h1] animate-infinite-scroll"
			>
				<li className="flex gap-6">
					<h1 className="max-w-xs overflow-hidden whitespace-nowrap font-medium text-xl">
						&bull; Site Under Construction&nbsp;
					</h1>
					<h1 className="max-w-xs overflow-hidden whitespace-nowrap font-medium text-xl">
						&bull; Site Under Construction&nbsp;
					</h1>
					<h1 className="max-w-xs overflow-hidden whitespace-nowrap font-medium text-xl">
						&bull; Site Under Construction&nbsp;
					</h1>
					<h1 className="max-w-xs overflow-hidden whitespace-nowrap font-medium text-xl">
						&bull; Site Under Construction&nbsp;
					</h1>
					<h1 className="max-w-xs overflow-hidden whitespace-nowrap font-medium text-xl">
						&bull; Site Under Construction&nbsp;
					</h1>
					<h1 className="max-w-xs overflow-hidden whitespace-nowrap font-medium text-xl">
						&bull; Site Under Construction&nbsp;
					</h1>
				</li>
			</ul>
		</div>
	);
};

export default InfiniteScroll;
