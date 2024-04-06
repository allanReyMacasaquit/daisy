import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<>
			<nav>
				<span>HomeLayout</span>
			</nav>
			<Outlet />
		</>
	);
};
export default HomeLayout;
