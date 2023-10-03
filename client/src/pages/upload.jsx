import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Upload = () => {
	const [selectedFile, setSelectedFile] = useState('')
	const [selectedOption, setSelectedOption] = useState('single')
	const [showProblemFormat, setShowProblemFormat] = useState(false)
	const router = useRouter()
	if (!Cookies.get('accessToken')) router.push('/signin?alertCompulsory=true')

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0]

		if (selectedFile) {
			// You can access the selected file using `selectedFile`.
			// You can perform further actions with the file here.
			setSelectedFile(`Selected File: ${selectedFile.name}`)
		}
	}

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value)
	}

	const toggleProblemFormat = () => {
		setShowProblemFormat(!showProblemFormat)
	}

	return (
		<>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center bg-phDarkgrey">
				<div className="w-full max-w-md">
					<div className="rounded-t-lg border-b-2 border-black bg-phGreen py-4 text-center  font-manjari text-2xl text-phLinen">
						Upload a Contest Problem
					</div>
					{/*make a button underneath that says "Select File" and when you click it, it takes you to a file explorer and you can select a file to upload*/}
					<div className="flex flex-col items-center rounded-b-lg bg-phDarkergrey p-4 text-white">
						<div className="mb-4 flex justify-center">
							<label className="mr-4">
								<input
									type="radio"
									value="single"
									checked={selectedOption === 'single'}
									onChange={handleOptionChange}
								/>
								Select zip file containing 1 Problem set
							</label>
							<label>
								<input
									type="radio"
									value="multiple"
									checked={selectedOption === 'multiple'}
									onChange={handleOptionChange}
								/>
								Select zip file containing multiple Problem sets
							</label>
						</div>
						<input
							type="file"
							accept=".zip"
							className="hidden"
							id="fileInput"
							onChange={handleFileChange}
						/>
						<label
							htmlFor="fileInput"
							className="cursor-pointer rounded-lg bg-phDarkgrey px-4 py-2 text-phLinen hover:bg-gray-600"
						>
							{selectedOption === 'single'
								? 'Select File (1 Problem set)'
								: 'Select File (Multiple Problem sets)'}
						</label>
						<p className="mt-4 text-center">{selectedFile}</p>
						<p className="mt-4 text-center">
							Note: Please follow the problem-tools format for structuring the
							problems (must be directly inside a zip file).{' '}
							<button
								className="ml-2 cursor-pointer text-phLinen underline hover:text-phGreen"
								onClick={toggleProblemFormat}
							>
								Click here to see the correct Problem Tools Format!
							</button>
						</p>
						{showProblemFormat && (
							<div className="mt-4">
								<p>Here is the correct Problem Tools Format:</p>
								{/* Add your detailed format explanation here */}
								<p className="italic">
									This is where we explain the format in detail.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Upload
