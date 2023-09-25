import Link from 'next/link'
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'

const links = [
	{ href: '/', label: 'Find Problems' },
	{ href: '/upload', label: 'Upload Problems' },
	{ href: '/signin', label: 'Signin' }
]

function Navbar() {
	return (
		// a tailwind navbar
		<nav className="fixed z-10 w-full border-gray-200 bg-phDarkgrey font-manjari text-lg">
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<Link href="/" className="flex items-center">
					<span className="self-center whitespace-nowrap font-monoton text-2xl text-phLinen md:text-5xl">
						ProblemHub
					</span>
				</Link>
				<Menu>
					<Menu.Button className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden">
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-5 w-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</Menu.Button>
					<Menu.Items className="absolute right-0 top-24 mr-4 flex flex-col rounded-md bg-phDarkgrey p-4">
						{links.map((link) => (
							/* Use the `active` state to conditionally style the active item. */
							<Menu.Item key={link.href} as={Fragment}>
								{({ active }) => (
									<a
										href={link.href}
										className={`${
											active
												? 'bg-phDarkgrey text-phLinen'
												: 'bg-phDarkgrey text-white'
										}`}
									>
										{link.label}
									</a>
								)}
							</Menu.Item>
						))}
					</Menu.Items>
				</Menu>
				<div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
					<ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-phDarkgrey md:p-0">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="block rounded bg-phDarkgrey py-2 pl-3 pr-4 text-white hover:text-black md:p-0"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="h-1.5 w-full bg-phDarkergrey"></div>
		</nav>
	)
}

export default Navbar
