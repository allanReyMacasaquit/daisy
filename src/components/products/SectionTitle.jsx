const SectionTitle = ({ text }) => {
	return (
		<>
			<section>
				<div className='text-center shadow-xl rounded-xl shadow-slate-500 p-2'>
					<h2 className='text-3xl font-medium tracking-wider capitalize'>
						{text}
					</h2>
				</div>
			</section>
		</>
	);
};
export default SectionTitle;
