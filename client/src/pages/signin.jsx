import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
	return (
		<div>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center bg-phDarkgrey">
				<div className="w-full max-w-md">
					<div className="rounded-t-lg border-b-2 border-black bg-phGreen py-4 text-center  font-manjari text-2xl text-phLinen">
						LOGIN
					</div>
					<div className="rounded-b-lg bg-phDarkergrey p-4 text-white">
						<form action="your-login-action.php" method="POST">
							<div className="mb-4">
								<input
									className="w-full rounded-lg bg-phDarkgrey px-3 py-2 text-center text-white"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									required
								/>
							</div>
							<div className="mb-4">
								<input
									className="w-full rounded-lg bg-phDarkgrey px-3 py-2 text-center text-white"
									type="password"
									id="password"
									name="password"
									placeholder="Password"
									required
								/>
							</div>
							<div className="mb-4 flex items-center justify-center">
								<input
									type="checkbox"
									id="remember"
									name="remember"
									className="mr-2"
								/>
								<label className="text-phLinen" htmlFor="remember">
									Remember me
								</label>
							</div>
							<div className="mb-4 flex items-center justify-center">
								<button
									className="cursor-pointer rounded-lg bg-phDarkgrey px-4 py-2 text-phLinen hover:bg-gray-600"
									type="submit"
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
