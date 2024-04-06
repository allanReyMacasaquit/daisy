import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';

const themes = {
	light: 'light',
	dim: 'dim',
};

const Navbar = () => {
	const [theme, setTheme] = useState(themes.light);

	const handleTheme = () => {
		const { light, dim } = themes;
		const newTheme = theme === light ? dim : light;
		document.documentElement.setAttribute('data-theme', theme);
		setTheme(newTheme);
		console.log(theme);
	};
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<nav className='bg-base-300'>
			<div className='navbar align-element '>
				<div className='navbar-start'>
					{/* Title */}
					<NavLink to='/' className='hidden lg:flex  text-3xl items-center '>
						<h4 className='text-slate-600 cap'>daisy</h4>
						<span className='text-orange-800 uppercase ml-2'>store</span>
					</NavLink>
					{/* DROPDOWN */}
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<FaBarsStaggered className='h-6 w-6' />
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal '>
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end'>
					{/* CART LINK*/}
					<NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
						<div className='indicator'>
							<BsCart3 className='h-6 w-6' />
							<span className='badge badge-sm badge-primary indicator-item'>
								8
							</span>
						</div>
					</NavLink>
					{/* THEME ICONS */}
					<label className='swap swap-rotate ml-4'>
						<input type='checkbox' onChange={handleTheme} />
						<BsSunFill className='swap-on h-4 w-4' />
						<BsMoonFill className='swap-off h-4 w-4' />
					</label>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
