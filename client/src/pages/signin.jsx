import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const router = useRouter()
	const { alertCompulsory } = router.query
	if (Cookies.get('accessToken')) router.push('/')

	const handleSignIn = async (e) => {
		e.preventDefault()
		if (!username || !password) return
		setErrorMessage('')
		try {
			const response = await axios.post(
				`${process.env.BACKEND_API_URL}/api/token/`,
				{
					username: username,
					password: password,
				},
			)
			const { access } = response.data
			const maxAge = 60 * 60 * 24 * 7 // 1 week
			Cookies.set('accessToken', access, { expires: maxAge })
			Cookies.set('username', username, { expires: maxAge })
			if (alertCompulsory === 'true') router.push('/upload')
			else router.push('/')
		} catch (error) {
			console.error('Login failed: ', error)
			if (error.response) {
				if (error.response.status === 401)
					setErrorMessage('Invalid username or password.')
				else setErrorMessage(error.response.data.detail)
			} else setErrorMessage('An error occured.')
		}
	}

	return (
		<div>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center bg-phDarkgrey">
				<div className="w-full max-w-md">
					<div className="rounded-t-lg border-b-2 border-black bg-phGreen py-4 text-center  font-manjari text-2xl text-phLinen">
						LOGIN
					</div>
					<div className="rounded-b-lg bg-phDarkergrey p-4 text-white">
						<form>
							<div className="mb-4">
								<input
									className="w-full rounded-lg bg-phDarkgrey px-3 py-2 text-center text-white"
									type="text"
									id="username"
									name="username"
									value={username}
									placeholder="Username"
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
							</div>
							<div className="mb-4">
								<input
									className="w-full rounded-lg bg-phDarkgrey px-3 py-2 text-center text-white"
									type="password"
									id="password"
									name="password"
									value={password}
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							{/* <div className="mb-4 flex items-center justify-center">
								<input
									type="checkbox"
									id="remember"
									name="remember"
									className="mr-2"
								/>
								<label className="text-phLinen" htmlFor="remember">
									Remember me
								</label>
							</div> */}
							<div className="mb-4 flex items-center justify-center">
								<button
									className="cursor-pointer rounded-lg bg-phDarkgrey px-4 py-2 text-phLinen hover:bg-gray-600"
									onClick={handleSignIn}
								>
									Login
								</button>
							</div>
							<p className="text-center text-red-600">{errorMessage}</p>
							{alertCompulsory === 'true' && (
								<p className="text-center text-red-600">
									You must be signed in to access that page!
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
